async function uploadToImageKit(file: File) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/imagekit-upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`ImageKit upload failed: ${errorText}`);
    }

    const data = await response.json();
    console.log(data);
    return data.url;
  } catch (error) {
    console.error("ImageKit upload error:", error);
    throw new Error("Failed to upload pitch deck. Please try again.");
  }
}
export default uploadToImageKit;
