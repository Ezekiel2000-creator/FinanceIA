const express = require('express');
const router = express.Router();

const { createInvestmentPlan, getInvestmentPlans, updateInvestmentPlan, deleteInvestmentPlan } = require('../controllers/requestsControllers');
const authMiddleware = require('../middleware/authMiddleware');





// Investment plan routes
router.post('/investment-plans', createInvestmentPlan);
router.post('/all-investment-plans', authMiddleware, getInvestmentPlans);
router.post('/investment-plans/:id', authMiddleware, updateInvestmentPlan);
router.post('/investment-plans/:id', authMiddleware, deleteInvestmentPlan);

module.exports = router;
