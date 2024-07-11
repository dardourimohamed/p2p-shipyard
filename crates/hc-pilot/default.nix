{ inputs, self, ... }:

{
  perSystem = { inputs', pkgs, system, lib, ... }: {
    packages.hc-pilot = let
      craneLib = inputs.crane.mkLib pkgs;

      cratePath = ./.;

      cargoToml =
        builtins.fromTOML (builtins.readFile "${cratePath}/Cargo.toml");
      crate = cargoToml.package.name;

      commonArgs = {
        src =
          (self.lib.cleanTauriSource { inherit lib; }) (craneLib.path ../../.);
        doCheck = false;
        buildInputs = inputs.hc-infra.outputs.lib.holochainAppDeps.buildInputs {
          inherit pkgs lib;
        } ++ self.lib.tauriAppDeps.buildInputs { inherit pkgs lib; };
        nativeBuildInputs =
          (self.lib.tauriAppDeps.nativeBuildInputs { inherit pkgs lib; })
          ++ (inputs.hc-infra.outputs.lib.holochainAppDeps.nativeBuildInputs {
            inherit pkgs lib;
          });
      };
      cargoArtifacts = craneLib.buildDepsOnly (commonArgs // {
        cargoArtifacts = (self.lib.tauriHappCargoArtifacts { inherit pkgs lib; });
        version = "workspace";
        pname = "workspace";
      });
    in craneLib.buildPackage (commonArgs // {
      pname = crate;
      version = cargoToml.package.version;
      inherit cargoArtifacts;
    });
  };
}
