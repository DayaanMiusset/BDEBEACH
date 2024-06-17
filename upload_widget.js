const cloudName = "dufshghoz"; 
const uploadPreset = "bdebeach"; 


const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);//


function showUploadWidget() {
    cloudinary.openUploadWidget({
       cloudName: "<dufshghoz>",
       uploadPreset: "<bdebeacht>",
       sources: [
           "local",
           "url",
           "camera",
           "image_search",
           "google_drive",
           "facebook",
           "dropbox",
           "instagram",
           "shutterstock",
           "getty",
           "istock",
           "unsplash"
       ],
       googleApiKey: "<image_search_google_api_key>",
       showAdvancedOptions: true,
       cropping: true,
       multiple: false,
       defaultSource: "local",
       styles: {
           palette: {
               window: "#FFFFFF",
               windowBorder: "#90A0B3",
               tabIcon: "#0078FF",
               menuIcons: "#5A616A",
               textDark: "#000000",
               textLight: "#FFFFFF",
               link: "#0078FF",
               action: "#FF620C",
               inactiveTabIcon: "#0E2F5A",
               error: "#F44235",
               inProgress: "#0078FF",
               complete: "#20B832",
               sourceBg: "#E4EBF1"
           },
           fonts: {
               default: {
                   active: true
               }
           }
       }
   },
    (err, info) => {
      if (!err) {    
        console.log("Upload Widget event - ", info);
      }
     });
    }