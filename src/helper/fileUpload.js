import { existsSync, mkdirSync, promises as fs } from 'fs';
import path from 'path';

export const fileUpload = async (files, fieldName, folderName, maxSize = 1, isMultiple = false, required = true, allowedExtensions = ["image/jpg", "image/jpeg", "image/png", "image/webp"]) => {
    if (isMultiple) {
        let imageError = {};

        if (!files || files.length == 0) {
            imageError[fieldName] = `${fieldName.slice(0, 1).toUpperCase()}${fieldName.slice(1)} is a required field.`;
        } else {
            files.forEach(file => {
                const fileMaxSize = 1024 * 1024 * maxSize;

                if (!file.name) {
                    imageError[fieldName] = `${fieldName.slice(0, 1).toUpperCase()}${fieldName.slice(1)} is a required field.`;
                } else if (file.name && !allowedExtensions.includes(file.type)) {
                    let extList = [];
                    [...allowedExtensions].forEach(ext => {
                        extList.push(ext.split("/")[1]);
                    });
                    if (extList.length == 1) {
                        imageError[fieldName] = `Only ${extList[0]} format is allowed.`;
                    } else if (extList.length > 1) {
                        imageError[fieldName] = `Only ${extList.slice(0, extList.length - 1).join(", ")} or ${extList.slice(-1)} format are allowed.`;
                    }

                } else if (file.name && file.size > fileMaxSize) {
                    if (files.length == 1) {
                        imageError[fieldName] = `Your file size must be less than or equal ${maxSize}mb.`;
                    } else {
                        imageError[fieldName] = `Your each of the files must be less than or equal ${maxSize}mb.`;
                    }
                }
            });
        }

        // show image related error
        if (Object.keys(imageError).length > 0) {
            return { imageError };
        }

        const uploadDir = path.join(process.cwd(), "public", "uploads", folderName);

        if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir);
        }

        let fileUrls = [];
        let filePaths = [];
        
        try {
            await Promise.all(files.map(async file => {

                const extName = path.extname(file.name);
                const newFilename = "image" + "-" + file.name.replace(extName, "").split(/[\s_]+/).join("-").toLowerCase() + "-" + Date.now() + extName;
    
                const filepath = path.join(uploadDir, newFilename);
    
                const filedata = Buffer.from(await file.arrayBuffer());

                await fs.writeFile(filepath, filedata);
    
                fileUrls.push(`uploads/${folderName}/${newFilename}`);
                filePaths.push(filepath);
            }));
            return {fileUrls, filePaths};
        } catch (error) {
            return {imageError: {
                [fieldName]: "Error saving files. Try again later."
            }}
        }
    
    } else {
        
    }
}