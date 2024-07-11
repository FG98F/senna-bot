"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromInstanceMetadata = void 0;
const credential_provider_imds_1 = require("@smithy/credential-provider-imds");
const fromInstanceMetadata = (init) => {
    init?.logger?.debug("@smithy/credential-provider-imds", "fromInstanceMetadata");
    return (0, credential_provider_imds_1.fromInstanceMetadata)(init);
};
exports.fromInstanceMetadata = fromInstanceMetadata;
