import Document from "../database/documents.model.js"

export async function create(req,res){
    const {document, userId } = req.body

    try {
        
        const document = Document.create({
            userId,
            document
        })

        return res.status(204)

    } catch (error) {
        return res.status(500).json({message:'Erro no servidor'})
    }
}