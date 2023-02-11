import { SanityClient } from "@sanity/client";

const sanityClient = SanityClient({
    projectId: "v1wg4pul",
    dataset: "production",
    useCdn: true,
});
export default sanityClient;
