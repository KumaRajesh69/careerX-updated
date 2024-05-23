import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-image-picker-editor/dist/index.css";

// Dynamically import react-image-picker-editor without SSR
const ImagePicker = dynamic(() => import("react-image-picker-editor"), {
  ssr: false,
});

function ImageUpload({ onImageChange }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (image) => {
    setSelectedImage(image);
    onImageChange(image); // Call the parent component's callback
  };

  const imagePickerConfig = {
    language: "en",
    objectFit: "cover",
    compressInitial: null,
    hideEditBtn: true,
    hideDownloadBtn: true,
    hideDeleteBtn: true,
    hideAddBtn: true,
    height: "152px",
    width: "152px",
  };

  const initialImage = "/img2/uploadimg.svg";

  return (
    <div className="md:h-[152px] md:w-[152px] h-[102px] w-[102px] relative">
      <ImagePicker
        id="fileInput"
        config={imagePickerConfig}
        onSelect={handleImageChange}
        imageSrcProp={initialImage}
      />
    </div>
  );
}

export default ImageUpload;
