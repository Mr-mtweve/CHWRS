const facilityController = {
  getAllFacilities: (req, res) => {
    res.status(200).json({ success: true, data: [] });
  },
  createFacility: (req, res) => {
    res.status(201).json({ success: true, message: 'Facility created' });
  },
  getFacilityById: (req, res) => {
    res.status(200).json({ success: true, data: {} });
  },
  updateFacility: (req, res) => {
    res.status(200).json({ success: true, message: 'Facility updated' });
  },
  deleteFacility: (req, res) => {
    res.status(200).json({ success: true, message: 'Facility deleted' });
  },
  getAllWards: (req, res) => {
    res.status(200).json({ success: true, data: [] });
  },
  createWard: (req, res) => {
    res.status(201).json({ success: true, message: 'Ward created' });
  },
  updateWard: (req, res) => {
    res.status(200).json({ success: true, message: 'Ward updated' });
  },
  deleteWard: (req, res) => {
    res.status(200).json({ success: true, message: 'Ward deleted' });
  },
  getAllMunicipalities: (req, res) => {
    res.status(200).json({ success: true, data: [] });
  },
  createMunicipality: (req, res) => {
    res.status(201).json({ success: true, message: 'Municipality created' });
  }
};

module.exports = facilityController;
