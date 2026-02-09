import {Component, Input, OnInit, model, signal} from '@angular/core';
import {Router} from "@angular/router";
import {PropertyType} from "../../types/property.type";
import {string} from "joi";
//import { FormsModule } from '@angular/forms';



@Component({
    selector: 'app-main-raport-page',
    templateUrl: './main-raport-page.component.html',
    styleUrls: ['./main-raport-page.component.scss'],
    standalone: false
})
export class MainRaportPageComponent implements OnInit  {
  @Input()count: number  = 0;
  isChecked: boolean = false;
  clientName:string = '';
  birthDate: string = '';
  searchDate: string = '';
  complaints: string = '';
  medicalAnamnesis: string = '';
  socialAnamnesis: string = '';

 // value = model('');
//  clientName = signal('')
  prefrontalForehead = [
    'adequancy',
    'criticality',
    'exportMotivation',
    'emotionalState',
    'perfomance',
    'understanding instructions',
    'following instructions',
    'doing tasks',
    'accepting help'
  ]

  generalCharacteristic: PropertyType[] = [
    {
      name: 'contact',
      point: this.count? this.count : 0,
      buttonId: "00",
    },
    {
      name: 'entranceToConversation',
      point: this.count,
      buttonId: "01",
      description: []
    },
    {
      name: 'orientation',
      point: this.count,
      buttonId: "02",
      description: []
    },
    {
      name: 'adequancy',
      point: this.count,
      buttonId: "03",
      description: []
    },
    {
      name: 'criticality',
      point: this.count,
      buttonId: "04",
    },
    {
      name: 'sensitive',
      point: this.count,
      buttonId: "05",
    },
    {
      name: 'interest',
      point: this.count,
      buttonId: "06",
    },
    {
      name: 'activeComplaints',
      point: this.count,
      buttonId: "07",
    },
    {
      name: 'exportMotivation',
      point: this.count,
      buttonId: "08",
    },
    {
      name:  'emotionalState',//можем ли мы оценивать эмоциональный фон баллами
      point: this.count,
      buttonId: "09",
      description: []
    },
    {
      name:  'perfomance',
      point: this.count,
      buttonId: "010",
      descriptionTempo: [],
      descriptionDinamic: []
    },
    {
      name:  'understanding_instructions',
      point: this.count,
      buttonId: "011",
    },
    {
      name:  'following_instructions',
      point: this.count,
      buttonId: "012",
    },
    {
      name:  'doing tasks',
      point: this.count,
      buttonId: "013",
    },
    {
      name:  'accepting help',
      point: this.count,
      buttonId: "014",
      descriptionGeneral: [],
      descriptionNatureOfHelp: [],
      descriptionWhereHelp: [],
      descriptionEffectOfHelp: []
    },
  ]
  pracsis: PropertyType[]  =  [
    {
      name: 'dinamicPracsis',
      point: this.count,
      buttonId: "pracsis_0",
      description:[],
      descriptionSpeed: []
    },
    {
      name: 'grafics',
      point: this.count,
      buttonId: "pracsis_01",
      description:[]
    },
    {
      name: 'reciproknaya',
      point: this.count,
      buttonId: "pracsis_02",
      description:[]
    },
    {
      name: 'positionsPracsis',
      point: this.count,
      buttonId: "pracsis_03",
      description:[]
    },
    {
      name: 'positionsOralPracsis',
      point: this.count,
      buttonId: "pracsis_3",
      description:[]
    },
    {
      name: 'hed',
      point: this.count,
      buttonId: "pracsis_04",
      description:[]
    },
    {
      name: 'ears_motors',
      point: this.count,
      buttonId: "pracsis_05",
      descriptionEval: [],
      descriptionDoing: [],
      descriptionDoingByInstruction: []
    },
    {
      name: 'eyes',
      point: this.count,
      buttonId: "pracsis_06",
      description:[]
    },
    {
      name: 'constructor',
      point: this.count,
      buttonId: "pracsis_07",
      description:[]
    },
    {
      name: 'choise_reaction',
      point: this.count,
      buttonId: "pracsis_08",
      description:[]
    },
    {
      name: 'copy_kube',
      point: this.count,
      buttonId: "pracsis_09",
      descriptionDrawingByInstruction:[],
      descriptionCopy:[]
    },

  ]
  gnosis: PropertyType[] =  [
    {
      name: 'vision gnosis',
      point: this.count,
      buttonId: "gnosis_0",
      description:[]
    },
    {
      name: 'vision_space gnosis',
      point: this.count,
      buttonId: "gnosis_00",
      description:[]
    },
    {
      name: 'vision_symbolic gnosis',
      point: this.count,
      buttonId: "gnosis_01",
      description:[]
    },
    {
      name: 'auditory gnosis',
      point: this.count,
      buttonId: "gnosis_02",
      description:[]
    },
    {
      name: 'sensor gnosis',
      point: this.count,
      buttonId: "gnosis_03",
      description:[]
    },
    {
      name: 'emotional gnosis',
      point: this.count,
      buttonId: "gnosis_04",
      description:[]
    },
    {
      name: 'copy gnosis',
      point: this.count,
      buttonId: "gnosis_05",
      description:[]
    },
    {
      name: 'copy_simple gnosis',
      point: this.count,
      buttonId: "gnosis_06",
      description:[]
    },
  ]
  memory: PropertyType[] = [
    {
      name: 'vision_space_memory',
      point: this.count,
      buttonId: "memory_0",
      description:[]
    },
    {
      name: 'vision_memory',
      point: this.count,
      buttonId: "memory_01",
      description:[]
    },
    {
      name: 'audit_memory',
      point: this.count,
      buttonId: "memory_02",
      description:[]
    },
    {
      name: 'audit_memory_2_3',
      point: this.count,
      buttonId: "memory_03",
      description:[]
    },
  ]
  calculating:PropertyType[] = [
    {
      name: 'serial counting',
      point: this.count,
      buttonId: "counting_0",
      description:[]
    },
    {
      name: 'solving tasks',
      point: this.count,
      buttonId: "counting_01",
      description:[]
    },
  ]
  thinking:PropertyType[] = [
    {
      name: 'solving problems',
      point: this.count,
      buttonId: "thinking_00",
      description:[]
    },
    {
      name: 'solving analog',
      point: this.count,
      buttonId: "thinking_01",
      description:[]
    },
    {
      name: 'solving exclude',
      point: this.count,
      buttonId: "thinking_02",
      description:[]
    },
    {
      name: 'understanding',
      point: this.count,
      buttonId: "thinking_03",
      description: []
    },
    {
      name: 'understanding serial pictures',
      point: this.count,
      buttonId: "thinking_04",
    },
    {
      name: 'understanding pictures',
      point: this.count,
      buttonId: "thinking_05",
    },
    {
      name: 'understanding proverbs',
      point: this.count,
      buttonId: "thinking_06",
    },
  ]
  attention:PropertyType[] = [
    {
      name: 'attention',
      point: this.count,
      buttonId: "shulte",
      description:[]
    },
  ]
  attentionChild:PropertyType[] = [
    {
      name: 'attentionChild',
      point: this.count,
      buttonId: "faces",
    },
  ]
  speech: string = '';

  regulation: PropertyType[] = []
  memoryForm = {
    memory_count_1: null,
    memory_count_2: null,
    memory_count_3: null,
    memory_count_4: null,
    memory_count_5: null,
    memory_count_6: null,
  }
  shulteForm = {
    shulte_table_1: '',
    shulte_table_2:'',
    shulte_table_3:'',
    shulte_table_4:'',
    shulte_table_5:'',
  }
  facesTimeForm = {
    facesTime_1: '',
    facesTime_2: '',
    facesTime_3: '',
  }
  facesWrongsForm = {
    facesWrongs_1: '',
    facesWrongs_2: '',
    facesWrongs_3: '',
  }
  completedRaport = [
    {
      name: 'factInformation',
      clientName: this.clientName,
      birthDate: this.birthDate,
      searchDate: this.searchDate
    },
    {
      name: 'anamnesis',
      complaints: this.complaints,
      medicalAnamnesis: this.medicalAnamnesis,
      socialAnamnesis: this.socialAnamnesis
    },
    {
      name:'generalCharacteristics',
      generalCharacteristic: this.generalCharacteristic
    },
    {
      name: 'speech',
      speech: this.speech
    },
    {
      name: 'regulation',
      results: this.regulation
    },
    {
      name: 'pracsis',
      results: this.pracsis
    },
    {
      name: 'gnosis',
      results: this.gnosis
    },
    {
      name: 'memory',
      results: this.memory
    },
    {
      name: 'calculating',
      results: this.calculating
    },
    {
      name: 'thinking',
      results: this.thinking
    },
    {
      name: 'attention',
      results: this.attention
    },
    {
      name: 'attentionChild',
      results: this.attentionChild
    },

  ]

  constructor(private router: Router) { }
  buttonsCollection = document.getElementsByClassName('addButtons');
//  pracsisButtonsCollection = document.getElementsByClassName('pracsisButtons');
 // gnosisButtonsCollection = document.getElementsByClassName('gnosisButtons');
//  generalButtons = ;

  ngOnInit(): void {
   // localStorage.clear()
    console.log(this.buttonsCollection)
   // this.buttons()
  }
buttons(){
  for (let i = 0; i < this.buttonsCollection.length; i++) {
    this.buttonsCollection[i].addEventListener('click',this.savePoint.bind(this) )
  }
 // for (let i = 0; i < this.pracsisButtonsCollection.length; i++) {
 //   this.pracsisButtonsCollection[i].addEventListener('click',this.savePracsisPoint.bind(this) )
 // }
  //for (let i = 0; i < this.gnosisButtonsCollection.length; i++) {
  //  this.gnosisButtonsCollection[i].addEventListener('click',this.saveGnosisPoint.bind(this.takeButtonId.bind(this)) )
  //}
}
  addPoint(value: number){
    this.count = value
    console.log(this.count)


  }
  savePoint(button: any){
    console.log(button)
    let button_id = button.getAttribute("id")
    console.log(button_id)

    for (let i = 0; i < this.generalCharacteristic.length; i++) {
      if ( button_id ===  this.generalCharacteristic[i].buttonId) {
        this.generalCharacteristic[i].point = this.count
        console.log(this.generalCharacteristic[i].point)
      }
    }
  }


  saveObjectivePoint(button: any){
    console.log(button)
    let button_id = button.getAttribute("id")
    console.log(button_id)
    for (let i = 0; i <  this.pracsis.length; i++) {
      if ( button_id ===  this.pracsis[i].buttonId) {
        this.pracsis[i].point = this.count
        console.log(this.pracsis[i].point)
      }
    }
    if (this.gnosis) {
      for (let i = 0; i <  this.gnosis.length; i++) {
        if ( button_id ===  this.gnosis[i].buttonId) {
          this.gnosis[i].point = this.count
          console.log( this.gnosis[i].point)
        }
      }
    }
    if (this.memory) {
      for (let i = 0; i <  this.memory.length; i++) {
        if ( button_id ===  this.memory[i].buttonId) {
          this.memory[i].point = this.count
          console.log( this.memory[i].point)
        }
      }
    }
    if (this.thinking){
      for (let i = 0; i <  this.thinking.length; i++) {
        if ( button_id ===  this.thinking[i].buttonId) {
          this.thinking[i].point = this.count
          console.log( this.thinking[i].point)
        }
      }
    }
    if (this.calculating){
      for (let i = 0; i <  this.calculating.length; i++) {
        if ( button_id ===  this.calculating[i].buttonId) {
          this.calculating[i].point = this.count
          console.log( this.calculating[i].point)
        }
      }
    }
    if (this.attention){
      for (let i = 0; i <  this.attention.length; i++) {
        if ( button_id ===  this.attention[i].buttonId) {
          this.attention[i].point = this.count
          console.log( this.attention[i].point)
        }
      }
    }
    if (this.attentionChild){
      for (let i = 0; i <  this.attentionChild.length; i++) {
        if ( button_id ===  this.attentionChild[i].buttonId) {
          this.attentionChild[i].point = this.count
          console.log( this.attentionChild[i].point)
        }
      }
    }


  }
//отмечает инпут как чекнутый и записывает значение его в переменную
  inputChange(inputId: string ){
    let inputs = document.getElementsByClassName('inputs')

    if (inputs){
    let inputsArr = Array.from(inputs)
    if (inputsArr){
    let definitedInput = inputsArr.find(item => item.id === inputId)
      if (definitedInput && !definitedInput.hasAttribute('checked') ){
        definitedInput.setAttribute('checked','checked')
        let inputValue:string | null  = '';
         if (definitedInput.hasAttribute('value')){
             inputValue  = definitedInput.getAttribute('value')
           console.log( inputValue)
           if (definitedInput.className === 'inputs entrance') {
             let entranceItem = this.generalCharacteristic.find(item => item.name === 'entranceToConversation');
             if ( entranceItem &&  entranceItem.description && inputValue){
               entranceItem.description.push(inputValue)
               console.log( entranceItem)
             }
           }
           if (definitedInput.className === 'inputs orientatiuon') {
             let orientationItem = this.generalCharacteristic.find(item => item.name === 'orientation');
             if (orientationItem && orientationItem.description && inputValue){
               orientationItem.description.push(inputValue)
               console.log(orientationItem)
             }
           }
          if (definitedInput.className === 'inputs adequancy') {
            let adequancyItem = this.generalCharacteristic.find(item => item.name === 'adequancy');
            if (adequancyItem && adequancyItem.description && inputValue){
              adequancyItem.description.push(inputValue)
              console.log(adequancyItem)
            }
          }
           if (definitedInput.className === 'inputs emotions' && inputValue ) {
             let emotionsItem = this.generalCharacteristic.find(item => item.name === 'emotionalState');
             emotionsItem?.description?.push(inputValue)
             console.log( emotionsItem)
           }
           if (definitedInput.className === 'inputs perfomanceTempo' && inputValue ) {
             let perfomanceTempoItem = this.generalCharacteristic.find(item => item.name === 'perfomance');
             perfomanceTempoItem?.descriptionTempo?.push(inputValue)
             console.log( perfomanceTempoItem)
           }
           if (definitedInput.className === 'inputs perfomanceDinamic' && inputValue ) {
             let perfomanceDinamicItem = this.generalCharacteristic.find(item => item.name === 'perfomance');
             perfomanceDinamicItem?.descriptionDinamic?.push(inputValue)
             console.log( perfomanceDinamicItem)
           }
           if (definitedInput.className === 'inputs help' && inputValue ) {
             let helpItem = this.generalCharacteristic.find(item => item.name === 'accepting help');
             helpItem?.descriptionGeneral?.push(inputValue)
             console.log( helpItem)
           }
           if (definitedInput.className === 'inputs inputs_helping whatneed' && inputValue ) {
             let helpItem = this.generalCharacteristic.find(item => item.name === 'accepting help');
             helpItem?.descriptionNatureOfHelp?.push(inputValue)
             console.log( helpItem?.descriptionNatureOfHelp)
           }
           if (definitedInput.className === 'inputs inputs_helping where' && inputValue ) {
             let helpItem = this.generalCharacteristic.find(item => item.name === 'accepting help');
             helpItem?.descriptionWhereHelp?.push(inputValue)
             console.log( helpItem)
           }
           if (definitedInput.className === 'inputs inputs_helping effect' && inputValue ) {
             let helpItem = this.generalCharacteristic.find(item => item.name === 'accepting help');
             helpItem?.descriptionEffectOfHelp?.push(inputValue)
             console.log( helpItem)
           }

        }
      } else  {
        definitedInput?.removeAttribute('checked')
      }
      }
    }

    let pracsisInputs = Array.from( document.getElementsByClassName('inputs_pracsis'))
    if (pracsisInputs){
      let definitedInput = pracsisInputs.find(item => item.id === inputId)
      console.log(  definitedInput)
      if (definitedInput && !definitedInput.hasAttribute('checked') ){
        definitedInput.setAttribute('checked','checked')
        let inputValue:string | null  = '';
        if (definitedInput.hasAttribute('value')){
          inputValue  = definitedInput.getAttribute('value')
          console.log( inputValue)
        }
        if (definitedInput.className === 'inputs_pracsis dinamic') {
          let dinamicPracsisItem = this.pracsis.find(item => item.name === 'dinamicPracsis');
          if (dinamicPracsisItem?.description && inputValue){
            dinamicPracsisItem.description.push(inputValue)
            console.log(dinamicPracsisItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis dinamic speed'){
          let dinamicPracsisItem = this.pracsis.find(item => item.name === 'dinamicPracsis');
          if (dinamicPracsisItem?.descriptionSpeed && inputValue){
            dinamicPracsisItem.descriptionSpeed.push(inputValue)
          }
        }
        if (definitedInput.className === 'inputs_pracsis grafic') {
          let graficsItem = this.pracsis.find(item => item.name === 'grafics');
          if (graficsItem  && graficsItem.description && inputValue){
            graficsItem.description.push(inputValue)
            console.log(graficsItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis rezz') {
          let reciproknayaItem = this.pracsis.find(item => item.name === 'reciproknaya');
          if (reciproknayaItem  && reciproknayaItem.description && inputValue){
            reciproknayaItem.description.push(inputValue)
            console.log(reciproknayaItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis positoin') {
          let positionsPracsisItem = this.pracsis.find(item => item.name === 'positionsPracsis');
          if (positionsPracsisItem  && positionsPracsisItem.description && inputValue){
            positionsPracsisItem.description.push(inputValue)
            console.log(positionsPracsisItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis oralPositoin') {
          let positionsOralPracsisItem = this.pracsis.find(item => item.name === 'positionsOralPracsis');
          if (positionsOralPracsisItem  && positionsOralPracsisItem.description && inputValue){
            positionsOralPracsisItem.description.push(inputValue)
            console.log(positionsOralPracsisItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis hedTry') {
          let hedPositionsItem = this.pracsis.find(item => item.name === 'hed');
          if (hedPositionsItem  && hedPositionsItem.description && inputValue){
            hedPositionsItem.description.push(inputValue)
            console.log(hedPositionsItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis rithms evaluate') {
          let ears_motors_evaluation = this.pracsis.find(item => item.name === 'ears_motors');
          if (ears_motors_evaluation?.descriptionEval && inputValue){
            ears_motors_evaluation.descriptionEval.push(inputValue)
            console.log('1 '+ ears_motors_evaluation?.descriptionEval);
          }
        }
        if (definitedInput.className === 'inputs_pracsis rithms doing'){
          let ears_motorsItem = this.pracsis.find(item => item.name === 'ears_motors');
          if (ears_motorsItem?.descriptionDoing && inputValue){
            ears_motorsItem.descriptionDoing.push(inputValue)
            console.log('2'+ ears_motorsItem.descriptionDoing);
          }
        }
        if (definitedInput.className === 'inputs_pracsis rithms instruction') {
          let ears_motors_instruction = this.pracsis.find(item => item.name === 'ears_motors');
          if (ears_motors_instruction?.descriptionDoingByInstruction && inputValue) {
            ears_motors_instruction.descriptionDoingByInstruction.push(inputValue)
            console.log('3' + ears_motors_instruction.descriptionDoingByInstruction);
          }
        }
        if (definitedInput.className === 'inputs_pracsis eyesw') {
          let eyesItem = this.pracsis.find(item => item.name === 'eyes');
          if (eyesItem  && eyesItem.description && inputValue){
            eyesItem.description.push(inputValue)
            console.log(eyesItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis constructive') {
          let constructorItem = this.pracsis.find(item => item.name === 'constructor');
          if (constructorItem  && constructorItem.description && inputValue){
            constructorItem.description.push(inputValue)
            console.log(constructorItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis reaction') {
          let choise_reactionItem = this.pracsis.find(item => item.name === 'choise_reaction');
          if (choise_reactionItem  && choise_reactionItem.description && inputValue){
            choise_reactionItem.description.push(inputValue)
            console.log(choise_reactionItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis copy_kube draw') {
          let copySimpleItem = this.pracsis.find(item => item.name === 'copy_kube');
          if (copySimpleItem?.descriptionDrawingByInstruction && inputValue){
            copySimpleItem.descriptionDrawingByInstruction.push(inputValue)
            console.log(copySimpleItem)
          }
        }
        if (definitedInput.className === 'inputs_pracsis copy_kube') {
          let copySimpleItem = this.pracsis.find(item => item.name === 'copy_kube');
          if (copySimpleItem?.descriptionCopy && inputValue){
            copySimpleItem.descriptionCopy.push(inputValue)
            console.log(copySimpleItem)
          }
        }

      }
      else {
        definitedInput?.removeAttribute('checked')
      }
    }

    }
  inputChange2(input: any) {
    let input_id = input.getAttribute("id")
    console.log(input_id)
    // Iterate over all elements with class name 'inputs' and 'inputs_pracsis'
    const allInputs = document.querySelectorAll('.inputs, .inputs_pracsis, .inputs_gnosis, .inputs_memory, .inputs_counting, .inputs_thinking, .shultePoint');
    allInputs.forEach((input) => {
      // Check if the current input element has the provided inputId
      if (input.id === input_id) {
        // Check if the input is checked and if it has a value
        if (input.getAttribute('checked') === null && input.hasAttribute('value')) {
          input.setAttribute('checked', 'checked');
          const inputValue: string | null = input.getAttribute('value');
          if (inputValue) {
            // Define the appropriate item based on the input's class name
            let item;
            switch (input.className) {

              //гнозис
              case 'inputs_gnosis vision':
                item = this.gnosis.find(item => item.name === 'vision gnosis');
                break;
              case 'inputs_gnosis vision_symbol':
                item = this.gnosis.find(item => item.name === 'vision_symbolic gnosis');
                break;
              case 'inputs_gnosis vision_space':
                item = this.gnosis.find(item => item.name === 'vision_space gnosis');
                break;
              case 'inputs_gnosis ears':
                item = this.gnosis.find(item => item.name === 'auditory gnosis');
                break;
              case 'inputs_gnosis tactilo':
                item = this.gnosis.find(item => item.name === 'sensor gnosis');
                break;
              case 'inputs_gnosis emotions':
                item = this.gnosis.find(item => item.name === 'emotional gnosis');
                break;
              case 'inputs_gnosis copy':
                item = this.gnosis.find(item => item.name === 'copy gnosis');
                break;
              case 'inputs_gnosis copy_simple':
                item = this.gnosis.find(item => item.name === 'copy_simple gnosis');
                break;

                //память
              case 'inputs_memory visionSpaceMemory':
                item = this.memory.find(item => item.name === 'vision_space_memory');
                break;
              case 'inputs_memory visionMemory':
                item = this.memory.find(item => item.name === 'vision_memory');
                break;
              case 'inputs_memory auditMemory':
                item = this.memory.find(item => item.name === 'audit_memory');
                break;
              case 'inputs_memory auditMemory2_3':
                item = this.memory.find(item => item.name === 'audit_memory_2_3');
                break;
              // мышление
              case 'inputs_counting serial':
                item = this.calculating.find(item => item.name === 'serial counting');
                break;
              case 'inputs_counting tasks_solv':
                item = this.calculating.find(item => item.name === 'solving tasks');
                break;
              case 'inputs_thinking problems':
                item = this.thinking.find(item => item.name === 'solving problems');
                break;
              case 'inputs_thinking analog':
                item = this.thinking.find(item => item.name === 'solving analog');
                break;
              case 'inputs_thinking exclude4':
                item = this.thinking.find(item => item.name === 'solving exclude');
                break;
              case 'inputs_thinking stories':
                item = this.thinking.find(item => item.name === 'understanding');
                break;

                //
              case 'shultePoint':
                item = this.attention.find(item => item.name === 'attention');
                break;
              default:
                break;
            }
            // Push the inputValue to the item's description if item is found
            if (item && item.description) {
              item.description.push(inputValue);
              console.log(item);
            }
          }
        } else {
          input.removeAttribute('checked');
        }
      }
    });
  }

 /* inputChange789(input: any ){
    let input_id = input.getAttribute("id")
    console.log(input_id)

   if (!input.hasAttribute('checked') ){
      input.setAttribute('checked','checked')
     let inputValue:string | null  = '';
     if (input.hasAttribute('value')){
       inputValue  = input.getAttribute('value')
       console.log( inputValue)
     }
    // let gnosisInputs = Array.from( document.getElementsByClassName('inputs_gnosis'))
     if (input.className === 'inputs_gnosis vision') {
       let visionGnosidsItem = this.gnosis.find(item => item.name === 'vision gnosis');
       if (visionGnosidsItem  && visionGnosidsItem.description && inputValue){
         visionGnosidsItem.description.push(inputValue)
         console.log(visionGnosidsItem)
       }
     }
     if (input.className === 'inputs_gnosis vision') {
       let visionSymbolGnosidsItem = this.gnosis.find(item => item.name === 'vision_symbolic gnosis');
       if (visionSymbolGnosidsItem  && visionSymbolGnosidsItem.description && inputValue){
         visionSymbolGnosidsItem.description.push(inputValue)
         console.log(visionSymbolGnosidsItem)
       }
     }
     if (input.className === 'inputs_gnosis tactilo') {
       let sensorGnosisItem = this.gnosis.find(item => item.name === 'sensor gnosis');
       if (sensorGnosisItem  && sensorGnosisItem.description && inputValue){
         sensorGnosisItem.description.push(inputValue)
         console.log(sensorGnosisItem)
       }
     }
     if (input.className === 'inputs_gnosis emotions') {
       let emotionalGnosisItem = this.gnosis.find(item => item.name === 'emotional gnosis');
       if (emotionalGnosisItem  && emotionalGnosisItem.description && inputValue){
         emotionalGnosisItem.description.push(inputValue)
         console.log(emotionalGnosisItem)
       }
     }
     if (input.className === 'inputs_gnosis copy') {
       let copyGnosisItem = this.gnosis.find(item => item.name === 'copy gnosis');
       if (copyGnosisItem  && copyGnosisItem.description && inputValue){
         copyGnosisItem.description.push(inputValue)
         console.log(copyGnosisItem)
       }
     }
    } else {
      input.removeAttribute('checked')
   }
  }*/




  goToSummary(a: string, b: string, c:string, d: string,e : string, f: string, g: string): void{
console.log(this.completedRaport)
    this.completedRaport.find((item) => {
      item.name === 'factInformation'
      this.clientName = a;
      item.clientName = this.clientName;
      this.birthDate = b;
      item.birthDate = this.birthDate;
      this.searchDate = c;
      item.searchDate = this.searchDate;
      this.complaints = d;
    });

    this.completedRaport.find(item1 => {
      item1.name ===  'anamnesis'
      item1.complaints = this.complaints
      this.medicalAnamnesis = e;
      item1.medicalAnamnesis = this.medicalAnamnesis;
      this.socialAnamnesis = f;
      item1.socialAnamnesis = this.socialAnamnesis;
    });
    this.completedRaport.find(item2 => {
      item2.name === 'speech'
      this.speech = g
    });
    console.log(this.completedRaport)


    localStorage.setItem('speech',this.speech )

    this.generalCharacteristic.forEach(descriptionItem => {
      descriptionItem.description
      this.regulation.push(descriptionItem)
      console.log(this.regulation)
    })

    let userInfo = {
      userName:this.clientName,
      userBirthday: this.birthDate,
    }
    localStorage.setItem('user', JSON.stringify(userInfo))
    localStorage.setItem('examination', this.searchDate)
    let generalAnamnesis = {
      userComplaints:this.complaints,
      userMedAnam:this.medicalAnamnesis,
      userSocAnam: this.socialAnamnesis
    }
    localStorage.setItem('generalAnamnesis',JSON.stringify(generalAnamnesis));
    let generalDontGet = this.generalCharacteristic.filter(item => item.point === 0)
    localStorage.setItem('dontGet',JSON.stringify(generalDontGet));

    let generalZero =  this.generalCharacteristic.filter(item => item.point === 1)
    localStorage.setItem('zero',JSON.stringify(generalZero));

    let generalArrNotBad =  this.generalCharacteristic.filter(item => item.point === 2)
    localStorage.setItem('notBad',JSON.stringify(generalArrNotBad));

    let generalArrBad =  this.generalCharacteristic.filter(item => item.point === 3)
    localStorage.setItem('bad',JSON.stringify(generalArrBad));

    let generalArrWorse = this.generalCharacteristic.filter(item => item.point === 4)
    localStorage.setItem('worse',JSON.stringify(generalArrWorse));

    if (this.shulteForm.shulte_table_1 !== '' && this.shulteForm.shulte_table_2 !=='' && this.shulteForm.shulte_table_3 !==''){
      localStorage.setItem('shulte',JSON.stringify(this.shulteForm))
    } else {
      localStorage.removeItem('shulte')
    }

    if (this.facesTimeForm.facesTime_1 !== '' && this.facesTimeForm.facesTime_2  !=='' && this.facesTimeForm.facesTime_3  !==''){
      localStorage.setItem('facesTime',JSON.stringify(this.facesTimeForm))
    } else {
      localStorage.removeItem('facesTime')
    }

    if (this.facesWrongsForm.facesWrongs_1 !== '' && this.facesWrongsForm.facesWrongs_2  !=='' && this.facesWrongsForm.facesWrongs_3  !==''){
      localStorage.setItem('facesWrongs',JSON.stringify(this.facesWrongsForm))
    } else {
      localStorage.removeItem('facesWrongs')
    }

    if (this.memoryForm.memory_count_1 !== null && this.memoryForm.memory_count_2 !== null && this.memoryForm.memory_count_3 !== null){
      localStorage.setItem('memoryPoints',JSON.stringify(this.memoryForm))
    } else {
      localStorage.removeItem('memoryPoints')
    }

    let dontGotPointResults = [];

    for (let i = 5; i < this.completedRaport.length ; i++) {
      if (this.completedRaport[i].results && (this.completedRaport[i].results as PropertyType[])){
        let arr = (this.completedRaport[i].results as PropertyType[]).filter(item => item.point === 0)
        if (arr.length > 0 )  {
          dontGotPointResults.push(arr)
        }
      }
    }
    localStorage.setItem('dontGotResults',  JSON.stringify(dontGotPointResults));

    let zeroPointResults = [];

    for (let i = 5; i < this.completedRaport.length ; i++) {
      if (this.completedRaport[i].results && (this.completedRaport[i].results as PropertyType[])){
        let arr = (this.completedRaport[i].results as PropertyType[]).filter(item => item.point === 1)
        if (arr.length > 0 )  {
          zeroPointResults.push(arr)
        }
      }
    }
    localStorage.setItem('zeroResults',  JSON.stringify(zeroPointResults));

    let notBadResults = [];

    for (let i = 5; i < this.completedRaport.length ; i++) {
      if (this.completedRaport[i].results && (this.completedRaport[i].results as PropertyType[])){
        let  arr = (this.completedRaport[i].results as PropertyType[]).filter(item => item.point === 2)
        if (arr.length > 0 ){
          notBadResults.push(arr)
        }
      }
    }
    localStorage.setItem('notBadResults',  JSON.stringify(notBadResults));

    let badResults = [];
    for (let i = 5; i < this.completedRaport.length; i++) {
    if (this.completedRaport[i].results && (this.completedRaport[i].results as PropertyType[])) {
        let arr = (this.completedRaport[i].results as PropertyType[]).filter(item => item.point === 3)
        if (arr.length > 0 ) {
         badResults.push(arr)
        }
      }
    }
    localStorage.setItem('badResults',  JSON.stringify(badResults));

    let worseResults = [];
    for (let i = 5; i < this.completedRaport.length ; i++) {
      if (this.completedRaport[i].results && (this.completedRaport[i].results as PropertyType[])) {
        let arr = (this.completedRaport[i].results as PropertyType[]).filter(item => item.point === 4)
        if (arr.length > 0 ) {
          worseResults.push(arr)
        }
      }
    }
    localStorage.setItem('worseResults',JSON.stringify(worseResults ));

    this.router.navigate(['raport'])
  }
}


