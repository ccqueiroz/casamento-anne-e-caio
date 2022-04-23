import AppError from './typeErrors/AppError';

interface IResponseError {
    description?: string;
    message?: string;
    statusCode: number;
}

const handleErrors = (err: AppError): IResponseError => {
    if(err instanceof AppError){
        const error = {
            message: err?.message,
            statusCode: err?.statusCode
        } as AppError;
        return error;
    }
    return {
        statusCode: 500,
        message: "Server error"
    } as IResponseError;
}

export { handleErrors }