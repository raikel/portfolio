/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const awsSdk = require('aws-sdk');

function zipDir(srcDir, dstFile, inDir, onClose) {
  // create a file to stream archive data to.
  const output = fs.createWriteStream(dstFile);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

  // listen for all archive data to be written
  output.on('close', onClose);

  // good practice to catch warnings
  archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
      console.log(err);
    } else {
      throw err;
    }
  });

  // good practice to catch this error explicitly
  archive.on('error', function(err) {
    throw err;
  });

  // pipe archive data to the file
  archive.pipe(output);

  // append files from a sub-directory
  archive.directory(srcDir, inDir, null);

  // finalize the archive (ie we are done appending files but streams
  // have to finish yet) 'close', 'end' or 'finish' may be fired
  // right after calling this method so register to them beforehand
  archive.finalize();
}

function s3Upload({ s3, bucketName, srcFile, dstFile, onUpload }) {
  fs.readFile(srcFile, (err, data) => {
    if (err) {
      throw err;
    }
    const params = {
      Bucket: bucketName, // pass your bucket name
      Key: dstFile, // file will be saved as testBucket/contacts.csv
      Body: data
    };
    s3.upload(params, function(s3Err, data) {
      if (s3Err) {
        throw s3Err;
      }
      if (onUpload) {
        onUpload(data.Location);
      }
    });
  });
}

function deploy() {
  const distDir = path.join(__dirname, 'dist');
  const appFile = path.join(__dirname, 'dist.zip');

  console.info('Zipping app files...');
  zipDir(distDir, appFile, 'dist', () => {
    console.info(`Zipped file saved at ${appFile}`);
    console.info('Uploading app file to AWS S3...');

    s3Upload({
      s3: new awsSdk.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      }),
      bucketName: process.env.AWS_BUCKET_NAME,
      srcFile: appFile,
      dstFile: process.env.AWS_APP_FILE_NAME,
      onUpload: (location) => {
        console.info(`File uploaded successfully at ${location}`);
      }
    });
  });
}

deploy();
