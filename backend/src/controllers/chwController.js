const chwController = {
  getAllCHWs: (req, res) => {
    res.status(200).json({ success: true, data: [] });
  },
  createCHW: (req, res) => {
    res.status(201).json({ success: true, message: 'CHW created' });
  },
  getCHWById: (req, res) => {
    res.status(200).json({ success: true, data: {} });
  },
  updateCHW: (req, res) => {
    res.status(200).json({ success: true, message: 'CHW updated' });
  },
  deleteCHW: (req, res) => {
    res.status(200).json({ success: true, message: 'CHW deleted' });
  },
  assignWard: (req, res) => {
    res.status(200).json({ success: true, message: 'Ward assigned' });
  },
  assignFacility: (req, res) => {
    res.status(200).json({ success: true, message: 'Facility assigned' });
  },
  getCHWReports: (req, res) => {
    res.status(200).json({ success: true, data: [] });
  },
  getCHWActivity: (req, res) => {
    res.status(200).json({ success: true, data: [] });
  }
};

module.exports = chwController;
