const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
});

app.get('/property/:fullPropertyAddress', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const { fullPropertyAddress } = req.params;

    if (!fullPropertyAddress) {
        res.status(418).send({
            message: 'Please provide an address you want to check the required documents for.'
        });
    }

    const proofOfIdentityState = Math.random() < 0.9;
    const propertyTitleDeedsState = Math.random() < 0.9;
    const energyPerformanceCertificateState = Math.random() < 0.9;
    const extensionsAndAlterationsDocumentationState = Math.random() < 0.9;
    const utilityBillsPaidState = Math.random() < 0.9;
    res.status(200).send({
        proofOfIdentityState: proofOfIdentityState,
        propertyTitleDeedsState: propertyTitleDeedsState,
        energyPerformanceCertificateState: energyPerformanceCertificateState,
        extensionsAndAlterationsDocumentationState: extensionsAndAlterationsDocumentationState,
        utilityBillsPaidState: utilityBillsPaidState
    });
});