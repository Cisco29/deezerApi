module.exports = class {

    getCover(album) {
        let pathDest = path.join(__dirname, '..', '..', 'public', 'cover', album.id+"jpg")
        if(!FileSystem.existsSync(PathDest)) {
            console.log(pathDest)
            this.download(album.cover, pathDest);
        }
        return `/cover/${album.id}.jpg`;
    }

    async download(url, path) {
        try {
            const response= await axios({
                url: url,
                method: 'get',
                responseType: 'stream',
            });
            response.data.pipe(fs.createWriteStream(path));
            return new Promise((resolve, reject) => {
                response.data.on('end', resolve);
                response.data.on('error', resolve);
            });
        } catch (error) {
            throw new Error('Erreur lors du téléchargement de l\'image : ', error);
        }
    }
}