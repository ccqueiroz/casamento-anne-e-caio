import AppError from './typeErrors/AppError';

interface IResponseError {
    description?: string;
    message?: string;
    statusCode: number;
}

const handleErrors = (err: AppError | unknown): IResponseError => {
    if(err instanceof AppError){
        const error: AppError = {
            message: err?.message,
            statusCode: err?.statusCode,
            name: err?.name
        };
        return error;
    }
    return {
        statusCode: 500,
        message: "Server error"
    } as IResponseError;
}

export { handleErrors }