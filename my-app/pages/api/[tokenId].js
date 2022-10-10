export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = 5;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://raw.githubusercontent.com/adamsyy/cryptoDevs-NFTcollection/main/my-app/public/";
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      name: "Pixie Token #" + tokenId,
      description: "Get exclusive perks by minting the pixie NFTs",
      image: image_url + tokenId + ".svg",
    });
  }