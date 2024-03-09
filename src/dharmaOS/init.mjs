import { exec } from 'child_process';
import { readFile, writeFile } from 'fs';
const rootLocation = '/Users/paytonlee/Developer/Github/Dharmabot/src/app';

function updateAwareness(sectionId, newContent) {
  
  const awarenessPath = `${rootLocation}/dharmaOS/awareness.md`;

  readFile(awarenessPath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Could not read awareness.md: ${err.message}`);
      return;
    }
    const sectionTitle = '# '+sectionId;
    const startIndex = data.indexOf(sectionTitle);
    if (startIndex === -1) {
      console.error('Section titled "directory structure" not found in awareness.md');
      return;
    }
    // Objective Find the end index of the next section
    const endIndex = data.indexOf('# ', startIndex + sectionTitle.length);
    const newData = endIndex === -1 ? 
      data.slice(0, startIndex + sectionTitle.length) + '\n\n' + newContent :
      data.slice(0, startIndex + sectionTitle.length) + '\n\n' + newContent + data.slice(endIndex);
      
    writeFile(awarenessPath, newData, 'utf8', (err) => {
      if (err) {
        console.error(`Could not update awareness.md: ${err.message}`);
      } else {
        console.log('Directory structure updated in awareness.md successfully.');
      }
    });
  });
}

// Function to capture and save the tree structure of the current folder
function perceiveSelf() {
  exec('tree ' + rootLocation, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    updateAwareness("Directory", stdout)
  })

  
  // Objective, give awareness to package.json
  const packagePath = rootLocation + '/../../package.json';
  // console.log(`Reading package.json from path: ${packagePath}`);
  readFile(packagePath, 'utf8', (err, packageData) => {
    if (err) {
      console.error(`Could not read package.json: ${err.message}`);
      return;
    }
    updateAwareness("Packages", packageData)
    
  });
}



exec('realpath '+rootLocation, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Root directory's path: ${stdout.trim()}`);
});

// Show the current username
import { userInfo } from 'os';
const currentUser = userInfo().username;
console.log(`Current user: ${currentUser}`);
// Log the permissions for the root directory
exec('ls -ld ' + rootLocation, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Permissions for root directory: ${stdout}`);
});

// Call the function to generate and save the tree structure
perceiveSelf();
