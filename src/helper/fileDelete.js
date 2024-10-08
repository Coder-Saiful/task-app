import { promises as fs } from 'fs';
export const fileDelete = async (filePaths, multiple=false) => {
    if (multiple) {
        try {
            await Promise.all(filePaths.map(async filepath => {
                await fs.unlink(filepath);
            }));
            console.log("Previous file deleted successfully.");
            return true;
        } catch (error) {
            console.log("Previous file doesn't delete.");
            return false;
        }
    }
}