import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";

cloudinary.config({
	cloud_name: "dd7yzx14t",
	api_key: "242716858313374",
	api_secret: import.meta.env.CLOUDINARY_SECRET,
});

export const uploadStream = async (
	buffer: Uint8Array
): Promise<UploadApiResponse> => {
	return new Promise((resolve, reject) => {
		cloudinary.uploader
			.upload_stream(
				{
					folder: "musicians corner banda/scores",
				},
				(error, result) => {
					if (result) return resolve(result);
					reject(error);
				}
			)
			.end(buffer);
	});
};
