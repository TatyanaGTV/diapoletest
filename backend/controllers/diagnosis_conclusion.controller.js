const ConclusionModel = require('../models/diagnosis_conclusion.model');
//const Diagnosis_conclusionModel = require('../models/diagnosis_conclusion.model');

class Diagnosis_conclusionController {
    static getConclusions(req, res) {
        let operations = ConclusionModel.findAll(req.body.user.id);
        res.json(operations.map(item => ({id: item.id, title: item.title})));
    }

    static getConclusion(req, res) {
        const {id} = req.params;
        if (!id) {
            return res.status(400)
                .json({error: true, message: "ID parameter should be passed"});
        }

        const raport = ConclusionModel.findOne({id: parseInt(id), user_id: req.body.user.id});
        if (!raport) {
            return res.status(404)
                .json({error: true, message: "Not found"});
        }
        res.json({
            id: raport.id,
            title: raport.title
        });
    }

    static createConclusion(req, res) {
        const {title} = req.body;
        if (!title) {
            return res.status(400)
                .json({error: true, message: "Title parameter should be passed"});
        }

        let raport = ConclusionModel.findOne({title: title, user_id: req.body.user.id});
        if (raport) {
            return res.status(400)
                .json({error: true, message: "This record already exists"});
        }

        let id = 1;
        while (ConclusionModel.findOne({id: id})) {
            id++;
        }

      raport = {
            id: id,
            title: req.body.title,
            user_id: req.body.user.id,
            solution: req.body.solution
        };

      ConclusionModel.create(raport)
        res.json({
            id: raport.id,
            title: raport.title
        });
    }

    static updateConclusion(req, res) {
        const {id} = req.params;
        const {title} = req.body;
        if (!id || !title) {
            return res.status(400)
                .json({error: true, message: "Title and ID parameters should be passed"});
        }

        res.json(ConclusionModel.update({id: parseInt(id), user_id: req.body.user.id}, title));
    }

    static deleteConclusion(req, res) {
        const {id} = req.params;
        if (!id) {
            return res.status(400)
                .json({error: true, message: "ID parameter should be passed"});
        }
      ConclusionModel.delete({id: parseInt(id), user_id: req.body.user.id});
    //  Diagnosis_conclusionModel.update({
     //     raport_diagnosis_id: parseInt(id),
     //       user_id: req.body.user.id
     //   });
        res.json({
            error: false,
            message: 'Removed successfully'
        });
    }
}

module.exports = Diagnosis_conclusionController;
