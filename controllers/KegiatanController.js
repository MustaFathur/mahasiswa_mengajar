const KegiatanModel = require('../models').Kegiatan;

const getKegiatan = async (req, res) => {
    try {
        const kegiatanList = await KegiatanModel.findAll();
        res.render('Mahasiswa/home', {
            kegiatanList,
            title: 'home'
        });
    } catch (error) {
        console.error("Error fetching kegiatan:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { getKegiatan };
