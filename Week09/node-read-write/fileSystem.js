import fs from "fs/promises";
import { join } from "path";
import { format } from "date-fns";

// function createDirectory(folderName) {
//   try {
//     if (!existsSync(folderName)) {
//       mkdirSync(folderName);
//     }
//   } catch (error) {
//     console.error("there was an error:", error.message);
//   }
// }

const existsDirectory = async (dirName) => {
  try {
    await fs.access(dirName);
    console.log("Directory can be read and written.");
    return true;
  } catch (err) {
    console.log("There is no such directory.");
    return false;
  }
};

const createDirectory = async (dirName) => {
  try {
    await fs.mkdir(dirName);
    console.log("Directory was successfully created.");
  } catch (error) {
    console.error("There was an error creating the directory:", error.message);
  }
};

const createFileWithMessage = async (message) => {
  try {
    const now = new Date();
    const dirName = format(now, "yyyy-MM-dd");
    const fileName = format(now, "HH-mm-ss") + ".txt";

    // const dirName = date
    //   .toLocaleDateString("en-GB", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    //   })
    //   .split("/")
    //   .reverse()
    //   .join("-");

    // const fileName = `${date
    //   .toLocaleTimeString("en-GB", {
    //     hours: "2-digit",
    //     minutes: "2-digit",
    //     seconds: "2-digit",
    //   })
    //   .split(":")
    //   .join("-")}.txt`;

    const res = await existsDirectory(dirName);
    if (!res) {
      await createDirectory(dirName);
    }

    const path = join(dirName, fileName);
    await fs.appendFile(path, message + "\n");
    console.log("The message was successfully written.");
  } catch (error) {
    console.error("There was an error:", error.message);
  }
};

const deleteFileByName = async (filePath) => {
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
    console.log("File was successfully deleted.");
  } catch (error) {
    console.log("File not found.");
  }
};

await createFileWithMessage("Hello there");
await deleteFileByName("2024-09-21/11-59-22.txt");
