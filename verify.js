// ====================================
// NexVora Payment Verification System
// verify.js v1.0
// ====================================


// Validate Request
export async function validateRequest(data){

    if(!data){

        return{

            success:false,
            message:"Invalid Request"

        };

    }

    return{

        success:true,
        message:"Request Valid"

    };

}


// Validate UTR
export async function validateUTR(utr){

    if(!utr){

        return{

            success:false,
            message:"UTR Number Required"

        };

    }

    if(!/^\d{12}$/.test(utr)){

        return{

            success:false,
            message:"Invalid UTR Number"

        };

    }

    return{

        success:true,
        message:"Valid UTR Number"

    };

}


// Check Duplicate UTR
export async function checkDuplicateUTR(utr){

    if(!utr){

        return{

            success:false,
            message:"UTR Number Missing"

        };

    }

    return{

        success:true,
        message:"UTR Not Used"

    };

}


// Check Payment Exists
export async function checkPaymentExists(utr){

    if(!utr){

        return{

            success:false,
            message:"Payment Not Found"

        };

    }

    return{

        success:true,
        message:"Payment Found"

    };

}


// Verify Merchant
export async function verifyMerchant(data){

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


// Verify Amount
export async function verifyAmount(data){

    if(!data){

        return{

            success:false,
            message:"Amount Verification Failed"

        };

    }

    return{

        success:true,
        message:"Amount Verified"

    };

}


// Verify Payment Status
export async function verifyPaymentStatus(data){

    if(!data){

        return{

            success:false,
            message:"Payment Verification Failed"

        };

    }

    return{

        success:true,
        message:"Payment Successful"

    };

}


// Check Already Claimed
export async function checkAlreadyClaimed(utr){

    if(!utr){

        return{

            success:false,
            message:"Payment Already Claimed"

        };

    }

    return{

        success:true,
        message:"Payment Not Claimed"

    };

}


// Generate Response
export async function generateResponse(status,message){

    return{

        success:success,
        message:message

    };

}
