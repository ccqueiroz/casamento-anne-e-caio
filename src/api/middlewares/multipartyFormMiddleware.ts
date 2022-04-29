import formidable from 'formidable';
import { FieldsFormidableModels, FileFormidableModels } from '../client/models/formidableModels';
import { NextApiRequestModels, NextApiResponseModels } from '../client/models/nextHTTPModels';

const form = new formidable.IncomingForm({multiples: false});

export default async function parseMultiPartyForm(request: NextApiRequestModels, response: NextApiResponseModels, next: any) {
    const contentType = request.headers['content-type'];
    if (contentType && contentType.indexOf('multipart/form-data') !== -1) {
		form.parse(request, (err, fields: FieldsFormidableModels, files: FileFormidableModels) => {
			if (!err) {
				request.body = fields;
				request.files = files;
			}
			next();
		});
	} else {
		next();
	}
};
