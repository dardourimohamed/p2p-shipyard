use std::collections::HashMap;

use holochain::prelude::{
    AppBundle,  AppBundleSource, 
     MembraneProof, NetworkSeed,
    RoleName, 
};
use holochain_client::{
    AdminWebsocket, AgentPubKey, AppInfo,  InstallAppPayload, 
};
use holochain_types::web_app::WebAppBundle;

pub async fn install_web_app(
    admin_ws: &AdminWebsocket,
    app_id: String,
    bundle: WebAppBundle,
    membrane_proofs: HashMap<RoleName, MembraneProof>,
    agent: Option<AgentPubKey>,
    network_seed: Option<NetworkSeed>,
) -> crate::Result<AppInfo> {
    let app_info = install_app(
        admin_ws,
        app_id.clone(),
        bundle.happ_bundle().await?,
        membrane_proofs,
        agent,
        network_seed,
    )
    .await?;

    log::info!("Installed web-app's ui {app_id:?}");

    Ok(app_info)
}

pub async fn install_app(
    admin_ws: &AdminWebsocket,
    app_id: String,
    bundle: AppBundle,
    membrane_proofs: HashMap<RoleName, MembraneProof>,
    agent: Option<AgentPubKey>,
    network_seed: Option<NetworkSeed>,
) -> crate::Result<AppInfo> {
    log::info!("Installing app {}", app_id);

    let agent_key = match agent {
        Some(agent) => agent,
        None => admin_ws
            .generate_agent_pub_key()
            .await
            .map_err(|err| crate::Error::ConductorApiError(err))?,
    };

    let app_info = admin_ws
        .install_app(InstallAppPayload {
            agent_key,
            membrane_proofs,
            network_seed,
            source: AppBundleSource::Bundle(bundle),
            installed_app_id: Some(app_id.clone()),
        })
        .await
        .map_err(|err| crate::Error::ConductorApiError(err))?;
    log::info!("Installed app {app_info:?}");

    let response = admin_ws
        .enable_app(app_id.clone())
        .await
        .map_err(|err| crate::Error::ConductorApiError(err))?;

    log::info!("Enabled app {app_id:?}");

    Ok(response.app)
}
