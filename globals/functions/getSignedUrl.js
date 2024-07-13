import {cloudFrontKey} from "../GlobalsAndConstants";

function getSignedUrl(image) {
    // printInConsole(`image - https://${cloudFrontKey}.cloudfront.net/${image?.s3FileKey}`);
    if (image?.s3FileKey) return `https://${cloudFrontKey}.cloudfront.net/${image?.s3FileKey}`
}

export default getSignedUrl;
