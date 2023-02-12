import SanityClient from "@sanity/client";
const sanityClient: any = SanityClient({
    projectId: "v1wg4pul",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-08-31",
});

export default sanityClient;
