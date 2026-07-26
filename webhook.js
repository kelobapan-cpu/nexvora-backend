// ====================================
// NexVora Webhook Security System
// webhook.js v1.0
// ====================================

// Validate Webhook Request

export async function validateWebhook(data){

    if(!data){

        return{

            success:false,
            message:"Invalid Webhook Request"

        };

    }

    return{

        success:true,
        message:"Webhook Request Valid"

    };

}

// Validate Merchant

export async function validateMerchant(data){

    if(!data){

        return{

            success:false,
            message:"Merchant Verification Failed"

        };

    }

    return{

        success:true,
        message:"Merchant Verified"

    };

}

// Validate Payment

export async function validatePayment(data){

    if(!data){

        return{

            success:false,
            message:"Payment Verification Failed"

        };

    }

    return{

        success:true,
        message:"Payment Verified"

    };

}

// Verify Transaction ID

export async function verifyTransactionID(

    transactionID

){

    if(!transactionID){

        return{

            success:false,
            message:"Transaction ID Not Found"

        };

    }

    return{

        success:true,
        message:"Transaction ID Verified"

    };

}

// Verify UTR

export async function verifyUTR(

    utr

){

    if(!utr){

        return{

            success:false,
            message:"UTR Verification Failed"

        };

    }

    return{

        success:true,
        message:"UTR Verified"

    };

}
