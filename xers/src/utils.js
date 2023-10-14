export const uploadToCloudinary = async (name, image) => {
    const data = new FormData();
    data.append('file', image);
    const preset = "xers-def";
    const response = await fetch(`https://api.cloudinary.com/v1_1/xers/image/upload?upload_preset=${preset}`, {
        method: 'POST',
        body: data,
    });
    if (!response.ok) {
        throw new Error('Image upload failed');
    }
    const result = await response.json();
    return result;
}