/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let data_Of_NFT=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name,mobile_no,job,location){
    const NFT={
        "name" : name,
        "phone_no" : mobile_no,
        "job" : job,
        "location" :location
    }
    data_Of_NFT.push(NFT);
    console.log("minted : ",name);
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
    function listNFTs(){
        for(let i=0;i<data_Of_NFT.length;i++){
            console.log("\n the data of " + i+1 +" NFT is ",data_Of_NFT[i]);
        }
    }

// print the total number of NFTs we have minted to the console
function getTotalSupply(){
    console.log("the total no of NFT are ",data_Of_NFT.length);
}

// call your functions below this line
mintNFT("Akshat",1234567890,"developer","India");
mintNFT("Rahul",1023456789,"content creater","India");
mintNFT("Aniket",9012345678,"web designer","India");

listNFTs();
getTotalSupply();
