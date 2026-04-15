import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

//import {GeneralType} from "../../types/general.type";
import {PropertyType} from "../../types/property.type";
//import {Chart} from "chart.js";
import {Router} from "@angular/router";
import {ReportService} from "../../shared/services/report.service";
import {GettingPropertyType} from "../../types/gettingProperty.type";
import html2pdf from "html2pdf.js";
import {string} from "joi";
import {FactorType} from "../../types/factor.type";
import {RegulationType} from "../../types/regulation.type";
import _default from "admin-lte/plugins/chart.js/core/core.interaction";
import point = _default.modes.point;


type DescriptionContextKey = 'calculating' | 'solving_tasks' | 'solving_problems' | 'analog' | 'exclude_4';
@Component({
    selector: 'app-raport-page',
    templateUrl: './raport-page.component.html',
    styleUrls: ['./raport-page.component.scss'],
    standalone: false
})

export class RaportPageComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { static: false })
  content!: ElementRef<HTMLElement>;
  @ViewChild('exportBtn') exportBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('exportBtn2') exportBtn2!: ElementRef<HTMLButtonElement>;

  [key: string]: any;

  psychoName: string |null = '';
  psyhoLastname: string | null = '';
  noData: [] | any = [];
  zeroSymptoms: [] | any = [];
  notBadSymptoms: [] | any = [];
  badSymptoms: [] | any = [];
  userId: string = '';
  worseSymptoms: [] | any = [];
  objectiveNoData:  GettingPropertyType []  = [];
  objectiveZeroSymptoms: GettingPropertyType [] = [];
  objectiveNotBadSymptoms: GettingPropertyType []  = [];

  objectiveBadSymptoms: GettingPropertyType [] =  [];
  objectiveWorseSymptoms: GettingPropertyType [] = [];
  complaints: string = '';
  med_anamnesis: string = '';
  soc_anamnesis: string = '';
  adequancy: string = '';
  adequancyDescription: string[] | string = [];
  contact: string = '';
  conversation: string = '';
  entranceDescription: string [] = [];
  speechInitiation: string = '';
  distance: string = '';
  orientation: string = '';
  orientationDescription: string[] | string = [];
  interest: string = '';
  reaction: string = '';
  criticality: string = '';
  expert_motivation: string = '';
  emotional_state: string = '';
  emotional_stateDescription: string[] | string = [];
  instructionUnderstanding: string = '';
  instructionFollowing: string = '';
  tasks: string = '';
  help: string[] = [];
  helpDescription: string[] = [];
  helpPlace: string = '';
  helpAccepting: string = '';
  workTempo: string = '';
  workDinamic: string = '';
  generalArray = [
    this.adequancy, this.adequancyDescription, this.contact, this.conversation, this.speechInitiation,
  ]
  nameOfUser: string | null = '';
  birthdayOfUser: string | null = '';
  examinationDate: string | null = '';
  //гнозис
  visiual_gnosis: string = '';
  visiual_gnosis_norm: string = '';
  visiual_space_gnosis:string = '';
  visiual_space_gnosis_norm:string = '';
  visiual_symbolic_gnosis: string = '';
  visiual_symbolic_gnosis_norm: string = '';
  sensor_gnosis: string = '';
  sensor_gnosis_norm: string = '';
  copy_gnosis: string = '';
  copy_gnosis_norm: string = '';
  copy_gnosis_worse: string = '';
  copy_simple_gnosis: string = '';
  copy_simple_gnosis_norm: string = '';
  copy_simple_gnosis_worse: string = '';
  emotional_gnosis: string = '';
  emotional_gnosis_norm: string = '';
  auditional_gnosis: string = '';
  auditional_gnosis_norm: string = '';
  tactilo_gnosis: string = '';
  tactilo_gnosis_norm: string = '';

  //праксис
  dinamic_pracsis: string = '';
  dinamic_pracsis_norm: string = '';
  dinamic_pracsis_speed: string = '';
  reciprok: string = '';
  reciprok_norm: string = '';
  position_pracsis: string = '';
  position_pracsis_norm: string = '';
  oral_pracsis: string = '';
  oral_pracsis_norm: string = '';
  grafics_pracsis: string = '';
  grafics_pracsis_norm: string = '';
  constract_pracsis: string = '';
  constract_pracsis_norm: string = '';
  choice_reaction: string = '';
  choice_reaction_norm: string = '';
  kube_copy: string = '';
  kube_copy_norm: string = '';
  kube_draw: string = '';
  kube_copy_worse: string = '';
  heads_test: string = '';
  heads_test_norm: string = '';
  heads_test_worse: string = '';
  listen_motor_test: string = '';
  listen_motor_test_norm: string = '';
  listen_motor_test_eval: string = '';
  listen_motor_test_instruction: string = '';
  listen_motor_test_worse: string = '';
  eyes_test: string = '';
  eyes_test_norm: string = '';
//память
  audit_memory: string = '';
  audit_memory_norm: string = '';
  audit_memory_2_3: string = '';
  audit_memory_2_3_norm: string = '';
  visiual_memory: string = '';
  visiual_memory_norm: string = '';
  visial_space_memory: string = '';
  visial_space_memory_norm: string = '';

  //мышление
  calculating: string = '';
  calculating_norm: string = '';
  causal_link: string = '';
  causal_link_norm: string = '';
  solving_problems: string = '';
  solving_problems_norm: string = '';
  solving_tasks: string = '';
  solving_tasks_norm: string = '';
  analog: string = '';
  analog_norm: string = '';

  exclude_4: string = '';
  exclude_4_norm: string = '';
  pictures_understanding: string = '';
  proverbs: string = '';
  text_meaning: string = '';
  speech: string = '';
  shultePoints: string = '';
  memoryPoints: string = '';
  attention: string = '';

  resume: string = '';
  recommends: string = '';
  recommends_decription: string = '';
  resume_description: string = '';
  isRefresh: boolean = false;
  attentionPoint: string = '';
  programming: string = '';

  neurodinamic: string = '';
  control: string = '';
  switchOfMovements: string = '';
  mobility: string = '';
  movementsDifficaltiesMinus: string = '';
  movementsDifficaltiesPlus: string = '';
  mentalProgramming: string = '';
  mentalProgramming2: string = '';
  logicProgramming: string = '';
  ram_value: string = '';
  minusMobility: string = '';
  sinus: string = '';
  sinus2:string = '';
  minusMobility2: string = '';
  programming2: string = '';

  control2: string = '';
  switchOfMovements2: string = '';
  mobility2: string = '';
  programming3: string = '';

  control3: string = '';
  switchOfMovements3: string = '';
  mobility3: string = '';
  operation_memory: string = '';

  regulationFromGeneral:string = '';
  regulationFromObj:string = '';

  solution = {};
// neuropsycological factors//
//подумать сохранять все в одном массиве или сделать 4 разных

  //1 балл//
  spaceFactor_1:FactorType = [];
  neurodinamicFactor_1:FactorType = [];
  reguloFactor_1:FactorType = [];
  kineticFactor_1:FactorType  = [];
  kinesteticFactor_1:FactorType = [];
  gemisphereFactor_1:FactorType  = [];
  phonematicFactor_1:FactorType  = [];
  simultAnFactor_1:FactorType  = [];

  //2 балла//
  spaceFactor_2:FactorType = [];
  neurodinamicFactor_2:FactorType = [];
  reguloFactor_2:FactorType = [];
  kineticFactor_2:FactorType  = [];
  kinesteticFactor_2:FactorType  = [];
  gemisphereFactor_2:FactorType  = [];
  phonematicFactor_2:FactorType  = [];
  simultAnFactor_2:FactorType  = [];

  // 3 балла//
  spaceFactor_3:FactorType = [];
  neurodinamicFactor_3:FactorType = [];
  reguloFactor_3:FactorType = [];
  kineticFactor_3:FactorType  = [];
  kinesteticFactor_3:FactorType  = [];
  gemisphereFactor_3:FactorType  = [];
  phonematicFactor_3:FactorType  = [];
  simultAnFactor_3:FactorType  = [];

  //4 балла//
  spaceFactor_4:FactorType = [];
  neurodinamicFactor_4:FactorType = [];
  reguloFactor_4:FactorType = [];
  kineticFactor_4:FactorType  = [];
  kinesteticFactor_4:FactorType  = [];
  gemisphereFactor_4:FactorType  = [];
  phonematicFactor_4:FactorType  = [];
  simultAnFactor_4:FactorType  = [];

//мфактор в диаграмму после сравнения//

 // regFactorAfterCompare:[] = [];



 /* solution = {
    sol_complaints: this.complaints,
    sol_med_anamnesis: this.med_anamnesis,
    sol_soc_anamnesis: this.soc_anamnesis,
    sol_adequancy: this.adequancy,
    sol_adequancyDescription: this.adequancyDescription,
    sol_contact: this.contact,
    sol_conversation: this.conversation,
    sol_speechInitiation: this.speechInitiation,
    sol_distance: this.distance,
    sol_orientation: this.orientation,
    sol_orientationDescription: this.orientationDescription,
    sol_interest: this.interest,
    sol_reaction: this.reaction,
    sol_criticality: this.criticality,
    sol_expert_motivation: this.expert_motivation,
    sol_emotional_state: this.emotional_state,
    sol_emotional_stateDescription: this.emotional_stateDescription,
    sol_instructionUnderstanding: this.instructionUnderstanding,
    sol_tasks: this.tasks,
    sol_help: this.help,
    sol_helpDescription: this.helpDescription,
    sol_helpAccepting: this.helpAccepting,
    sol_workTempo: this.workTempo,
    sol_workDinamic: this.workDinamic,
    sol_nameOfUser: this.nameOfUser,
    sol_birthdayOfUser: this.birthdayOfUser,
    sol_examinationDate: this.examinationDate,
    sol_visiual_gnosis: this.visiual_gnosis,
    sol_visiual_symbolic_gnosis: this.visiual_symbolic_gnosis,
    sol_sensor_gnosis: this.sensor_gnosis,
    sol_copy_gnosis: this.copy_gnosis,
    sol_emotional_gnosis: this.emotional_gnosis,
    sol_auditional_gnosis: this.auditional_gnosis,
    sol_tactilo_gnosis: this.tactilo_gnosis,
    sol_dinamic_pracsis: this.dinamic_pracsis,
    sol_reciprok: this.reciprok,
    sol_position_pracsis: this.position_pracsis,
    sol_oral_pracsis: this.oral_pracsis,
    sol_grafics_pracsis: this.grafics_pracsis,
    sol_constract_pracsis: this.constract_pracsis,
    sol_choice_reaction: this.choice_reaction,
    sol_heads_test: this.heads_test,
    sol_listen_motor_test: this.listen_motor_test,
    sol_eyes_test: this.eyes_test,
    sol_audit_memory: this.audit_memory,
    sol_audit_memory_2_3: this.audit_memory_2_3,
    sol_visiual_memory: this.visiual_memory,
    sol_visial_space_memory: this.visial_space_memory,
    sol_calculating: this.calculating,
    sol_causal_link: this.causal_link,
    sol_solving_problems: this.solving_problems,
    sol_solving_tasks: this.solving_tasks,
    sol_analog: this.analog,
    sol_exclude_4: this.exclude_4,
    sol_pictures_understanding: this.pictures_understanding,
    sol_proverbs: this.proverbs,
    sol_text_meaning: this.text_meaning,
    sol_speech: this.speech,
    sol_shultePoints: this.shultePoints,
    sol_memoryPoints: this.memoryPoints,
    sol_attention: this.attention,
    sol_recommends_decription: this.recommends_decription,
    sol_resume_description: this.resume_description,
    sol_attentionPoint: this.attentionPoint,
    sol_regulation: this.regulation,
  }*/




  constructor(private router: Router, private reportService: ReportService) {

  }

  ngOnInit(): void {
    //распаковка данных с локального хранилища
    this.psychoName = localStorage.getItem('userName');
    this.psyhoLastname = localStorage.getItem('userLastname');
    let user_id:string | null = localStorage.getItem('userId')
    if (user_id) {
      this.userId = JSON.parse(user_id);
    }
    let user_info:string | null = localStorage.getItem('user')
    if (user_info) {
      let info = JSON.parse(user_info)
      this.nameOfUser = info.userName
      this.birthdayOfUser = info.userBirthday
    }
    let shulte:string | null = localStorage.getItem('shulte')
    console.log(shulte)
    if (shulte) {
      this.shultePoints = Object.values(JSON.parse(shulte)).toString();
      console.log(this.shultePoints)
    }


    let memPoints:string | null = localStorage.getItem('memoryPoints')
    if (memPoints) {
      this.memoryPoints = Object.values(JSON.parse(memPoints)).toString();
    }
    let speechItem:string | null = localStorage.getItem('speech')
    if (speechItem) {
      this.speech = speechItem.toString()
    }

    this.examinationDate = localStorage.getItem('examination')
    console.log(this.examinationDate)
    let anamnesisInfo:string | null = localStorage.getItem('generalAnamnesis')
    if (anamnesisInfo) {
      let anamnesisInfoParsed = JSON.parse(anamnesisInfo)
      this.complaints = anamnesisInfoParsed.userComplaints;
      this.med_anamnesis = anamnesisInfoParsed.userMedAnam;
      this.soc_anamnesis = anamnesisInfoParsed.userSocAnam;
    }
    //распаковка данных общей части протокола
    // нет данных
    let dontGotData: string | null = localStorage.getItem('dontGet')
    if (dontGotData && dontGotData.length > 0) {
      this.noData = JSON.parse(dontGotData)
    }
//1 балл
    let zeroSymptoms: string | null = localStorage.getItem('zero')
    if (zeroSymptoms && zeroSymptoms.length > 0) {
      this.zeroSymptoms = JSON.parse(zeroSymptoms)
    }
//2 балла
    let notBadSymptoms: string | null = localStorage.getItem('notBad')
    if (notBadSymptoms && notBadSymptoms.length > 0) {
      this.notBadSymptoms = JSON.parse(notBadSymptoms)
    }
//3 балла
    let badSymptoms:string | null = localStorage.getItem('bad')
    if (badSymptoms && badSymptoms.length > 0) {
      this.badSymptoms = JSON.parse(badSymptoms)
    }
//4 балла
    let worseSymptoms: string | null = localStorage.getItem('worse')
    if (worseSymptoms && worseSymptoms.length > 0) {
      this.worseSymptoms = JSON.parse(worseSymptoms)
    }

    if (this.zeroSymptoms || this.notBadSymptoms || this.badSymptoms || this.worseSymptoms) {
      //сравнение массивов по регуляторке
      //возвращает длину самого длинного массива
       let arrays_general = [this.zeroSymptoms, this.notBadSymptoms, this.badSymptoms, this.worseSymptoms];

        let maxLength = Math.max(...arrays_general.map(arr => arr.length));
        console.log(maxLength);

//возвращает содержание самого длинного массива
         let arrays_general_longest = [this.zeroSymptoms, this.notBadSymptoms, this.badSymptoms, this.worseSymptoms];

        let longest = arrays_general_longest.reduce((max, current) => {
          return current.length > max.length ? current : max;
        });
    console.log(longest);
         if ( longest && longest[0].point){
           switch (longest[0].point) {
             case 1:
               this.regulationFromGeneral = '1'
               break;
             case 2:
               this.regulationFromGeneral = '2'
               break;
             case 3:
               this.regulationFromGeneral = '3'
               break;
             case 4:
               this.regulationFromGeneral = '4'
               break;
           }
         }

         console.log(this.regulationFromGeneral);


       //  longest[point] = 4
      this.giveValuesFromGeneralBlokForMakingRaport();
    }

    //распаковка данных объективной части протокола
    //нет данных
    let objectiveNoData: string | null = localStorage.getItem('dontGotResults');
    if ( objectiveNoData) {
      try {
        this.objectiveNoData = JSON.parse(objectiveNoData) as GettingPropertyType[];
      } catch (e) {
        console.error('Ошибка при парсинге JSON:', e);
      }
    }
   // if (objectiveNoData && objectiveNoData.length > 0) {
   //   this.objectiveNoData = JSON.parse(objectiveNoData);
   //   console.log(this.objectiveNoData);
   // }

    // 1 балл
    let objectiveZeroSymptoms: string | null = localStorage.getItem('zeroResults');
    if (objectiveZeroSymptoms) {
      try {
        this.objectiveZeroSymptoms = JSON.parse(objectiveZeroSymptoms) as GettingPropertyType[];
      } catch (e) {
        console.error('Ошибка при парсинге JSON:', e);
      }
    }
  //  if (objectiveZeroSymptoms && objectiveZeroSymptoms.length > 0) {
  //    this.objectiveZeroSymptoms = JSON.parse(objectiveZeroSymptoms);
   //   console.log(this.objectiveZeroSymptoms);
  //  }

    //2 балла
    let objective_not_badSymptoms: string | null = localStorage.getItem('notBadResults');
    if (objective_not_badSymptoms) {
      try {
        this.objectiveNotBadSymptoms = JSON.parse(objective_not_badSymptoms) as GettingPropertyType[];
      } catch (e) {
        console.error('Ошибка при парсинге JSON:', e);
      }
    }
  //  if (objective_not_badSymptoms && objective_not_badSymptoms.length > 0 && !objective_not_badSymptoms.includes('attentionChild')) {
    //  this.objectiveNotBadSymptoms = JSON.parse(objective_not_badSymptoms);
   //   console.log(this.objectiveNotBadSymptoms);
   // }

    //3 балла
    let objective_badSymptoms: string | null = localStorage.getItem('badResults')
    if (objective_badSymptoms) {
      try {
        this.objectiveBadSymptoms = JSON.parse(objective_badSymptoms) as GettingPropertyType[];
      } catch (e) {
        console.error('Ошибка при парсинге JSON:', e);
      }
    }
   // if (objective_badSymptoms && objective_badSymptoms.length > 0) {
   //   this.objectiveBadSymptoms = JSON.parse(objective_badSymptoms);
   //   console.log(this.objectiveBadSymptoms);
   // }
    //4 балла
    let objective_worseSymptoms: string | null = localStorage.getItem('worseResults');
    if (objective_worseSymptoms && objective_worseSymptoms.length > 0) {
      this.objectiveWorseSymptoms = JSON.parse(objective_worseSymptoms);
    }
    if ( this.objectiveZeroSymptoms.length > 0 || this.objectiveBadSymptoms.length > 0 || this.objectiveWorseSymptoms.length > 0 || this.objectiveNotBadSymptoms.length > 0) {
      this.giveValuesFromObjectiveBlokForMakingRaport();
    }

    /*let arr1: GettingPropertyType[] = this.objectiveZeroSymptoms ;
    let arr2:GettingPropertyType[]  = this.objectiveNotBadSymptoms;
    let arr3:GettingPropertyType[]  = this.objectiveBadSymptoms;
    let arr4:GettingPropertyType[]  = this.objectiveWorseSymptoms;

    if (arr1 && arr2 && arr3 && arr4) {
      let len = Math.max(arr1.length, arr2.length, arr3.length, arr4.length)
      for (let i = 0; i < len ; i++){
        console.log(arr1[i])

      }
    }*/

  }

  ngAfterViewInit() {

    /*const storageArray = Object.keys(localStorage).map(key => {
      try {
        return {
          key,
          array: JSON.parse(localStorage.getItem(key)!)
        };
      } catch {
        return {
          key,
          array: null
        };
      }
    });

    console.log(storageArray)
    console.log(storageArray[0].key)
    console.log(storageArray[0].array)

    //let key =
  //  let arrayFromStorage: string | null = localStorage.getItem(key)
  //  let array = [];
  //  if (arrayFromStorage && arrayFromStorage.length > 0) {
  //    array = JSON.parse(arrayFromStorage)
  //  }
    for (let i = 0; i < storageArray.length; i++) {
      this.restucturisingArraysWithPoints(storageArray[i].key, storageArray[i].array)
    }
*/


  }

//обработка значений общего блока
  giveValuesFromGeneralBlokForMakingRaport(): void {
    //обработка неполученной даты
  //  if (this.noData && this.noData.length > 0){}
    let regulationFromGeneral_normal:RegulationType = [];
    let regulationFromGeneral_subnormal: RegulationType = [];
    let regulationFromGeneral_bad: RegulationType = [];
    let regulationFromGeneral_worse: RegulationType = [];
      //обработка 1 баллов общий блок
      if (this.zeroSymptoms && this.zeroSymptoms.length > 0 ){ // сравнить вот эти массивы
       // let regulationFromGeneral_normal:RegulationType = [];
        if (this.zeroSymptoms.find((a: PropertyType) => a.name === 'contact')) {
          if (!this.contact){
            this.contact = 'доступен';
           regulationFromGeneral_normal.push(this.contact);
           this.reguloFactor_1.push(this.contact);
          }
        }

        if ( this.zeroSymptoms.find((a: PropertyType) =>  a.name === 'entranceToConversation')){
          let entranceItem = this.zeroSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')
          if (entranceItem?.description?.length > 0) {
            this.entranceDescription = entranceItem.description.toString().toLowerCase();
             // regulationFromGeneral_normal.push(this.entranceDescription);
          }
          if (!this.speechInitiation){
            this.speechInitiation = 'умеренная';
            regulationFromGeneral_normal.push(this.speechInitiation);
          }
        }

       if ( this.zeroSymptoms.find((a: PropertyType) => a.name === 'orientation')){
         if (!this.orientation){
           this.orientation = 'Ориентация в месте, времени, собственной личности сохранна';
           regulationFromGeneral_normal.push(this.orientation);
           this.neurodinamicFactor_1.push(this.orientation);
           this.spaceFactor_1.push(this.orientation);

         }
       }

       if (this.zeroSymptoms.find((a: PropertyType) => a.name === ('criticality'))) {
          if (!this.criticality){
            this.criticality = 'Критичность сохранна';
            regulationFromGeneral_normal.push(this.criticality);
            this.reguloFactor_1.push(this.criticality);

          }
        }

        if (this.zeroSymptoms.find((a: PropertyType) => a.name === ('adequancy'))){
          if (!this.adequancy){
            this.adequancy = 'адекватно ситуации';
            regulationFromGeneral_normal.push(this.adequancy);
            this.reguloFactor_1.push(this.adequancy);
          }
        }

        //подумать гла взять данные для нарушения дистанции
      if (this.zeroSymptoms.find((a: PropertyType) => a.name === 'exportMotivation'))  {
        if (!this.expert_motivation){
          this.expert_motivation = 'формируется';
          regulationFromGeneral_normal.push(this.expert_motivation);
          this.reguloFactor_1.push(this.expert_motivation);
        }
      }

       if (this.zeroSymptoms.find((a: PropertyType) => a.name === ('interest'))) {
         if (!this.interest){
           this.interest = 'Ребенок заинтересован в результатах выполнения заданий';
           regulationFromGeneral_normal.push( this.interest);
           this.reguloFactor_1.push(this.interest);
         }
       }

        if (this.zeroSymptoms.find((a: PropertyType) => a.name === 'emotionalState')) {
          let emotionalStateItem = this.zeroSymptoms.find((a: PropertyType) => a.name === 'emotionalState')
          if (emotionalStateItem?.description?.length > 0) {
            let reactionsRemovw = ['Реакции на успех/неуспех чрезмерные']
            let reactions = emotionalStateItem.description.toString()
              .split(/,+/)
              .filter((word: string) => reactionsRemovw.includes(word))
            this.reaction = reactions;
            this.emotional_stateDescription = emotionalStateItem.description.toString().toLowerCase();
         //   this.regulation = 'достаточен';
            this.reguloFactor_1.push( this.emotional_stateDescription);
            this.reguloFactor_1.push( this.reaction);
            this.neurodinamicFactor_1.push(this.emotional_stateDescription);
            this.neurodinamicFactor_1.push(this.reaction);
            regulationFromGeneral_normal.push( this.emotional_stateDescription);
            regulationFromGeneral_normal.push( this.reaction);

          }
        }

          if (this.zeroSymptoms.find((a: PropertyType) => a.name === 'understanding_instructions')){

            if (!this.instructionUnderstanding) {

              this.instructionUnderstanding = 'усваивает чаще с первого раза';
              regulationFromGeneral_normal.push( this.instructionUnderstanding);
              this.reguloFactor_1.push( this.instructionUnderstanding);
              this.gemisphereFactor_1.push(this.instructionUnderstanding);
           }
          }
          if (this.zeroSymptoms.find((a: PropertyType) => a.name === 'following_instructions')){
            if (!this.instructionFollowing) {
              this.instructionFollowing = 'удерживает самостоятельно в процессе выполнения заданий';
              regulationFromGeneral_normal.push( this.instructionFollowing);
              this.reguloFactor_1.push(this.instructionFollowing);
            }
          }


        if (this.zeroSymptoms.find((a: PropertyType) => a.name === 'doing tasks')){
          if (!this.tasks) {
            this.tasks = 'выполняет все и в полном объеме';
            regulationFromGeneral_normal.push(this.tasks);
            this.reguloFactor_1.push(this.tasks);
          }
        }
        if (this.zeroSymptoms.find((a: PropertyType) => a.name === 'accepting help')){
          let helpItemZero = this.zeroSymptoms.find((a: PropertyType) => a.name === 'accepting help')
          if ( helpItemZero?.descriptionGeneral?.length > 0) {
            this.help.push(helpItemZero.descriptionGeneral.toString());
            regulationFromGeneral_normal.push(helpItemZero.descriptionGeneral.toString());
            this.reguloFactor_1.push(this.help);
          }
          if ( helpItemZero?.descriptionNatureOfHelp?.length > 0) {
            this.helpDescription.push(helpItemZero.descriptionNatureOfHelp.toString()) ;
            regulationFromGeneral_normal.push(helpItemZero.descriptionNatureOfHelp.toString());
            this.reguloFactor_1.push(this.helpDescription);
          }
          if (helpItemZero?.descriptionWhereHelp?.length > 0) {
            this.helpPlace = helpItemZero.descriptionWhereHelp.toString()
            regulationFromGeneral_normal.push(this.helpPlace);
            this.reguloFactor_1.push(this.helpPlace );
          }
          if (helpItemZero?.descriptionEffectOfHelp?.length > 0) {
            let effectOfHelp: string = helpItemZero.descriptionEffectOfHelp.toString()
            this.helpDescription.push(effectOfHelp) ;
            regulationFromGeneral_normal.push(this.helpDescription);
            this.reguloFactor_1.push(this.helpDescription);
          }
        }

      if (this.zeroSymptoms.find((a: PropertyType) => a.name === 'perfomance')){
          let workProperties = this.zeroSymptoms.find((a: PropertyType) => a.name === 'perfomance');
          if (workProperties?.descriptionTempo?.length >0 || workProperties?.descriptionDinamic?.length >0) {
            this.workTempo = workProperties.descriptionTempo.toString();
            this.workDinamic = workProperties.descriptionDinamic.toString();
            if ( this.workTempo.length >= 1 && (this.workTempo.includes('замедленный') || this.workTempo.includes('ускоренный'))) {
              this.neurodinamic = 'дефицитарен';
            } else if (this.workDinamic.length >= 1 && (this.workDinamic.includes('неравномерная')||
              this.workDinamic.includes('с тенденцией к истощению' ) || this.workDinamic.includes('с тенденцией к врабатываемости')  ||
              this.workDinamic.includes('повышенная отвлекаемость от заданий'))){
              this.neurodinamic = 'дефицитарен';
              if (!this.neurodinamic){
                this.neurodinamicFactor_1.push(this.neurodinamic);
              }

            }
              else {
              this.neurodinamic = 'достаточен';
            }
          } else {
            this.workTempo ='нормативный';
            this.workDinamic = 'стабильная';
            this.neurodinamic = 'достаточен';
          }
        }
       /* if (regulationFromGeneral_normal?.length >= 1 && !this.regulation){
          console.log('tis works')
          this.regulation = 'достаточен'
          console.log( this.regulation );
          console.log(regulationFromGeneral_normal);
        }*/
       // this.regulation = 'достаточен'
        console.log(regulationFromGeneral_normal);
      }

      //обработка 2 балл общий блок
    if (this.notBadSymptoms && this.notBadSymptoms.length > 0) {

      if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'contact')) {
        if (!this.contact) {
          this.contact = 'доступен, требуется некоторое время';
          regulationFromGeneral_subnormal.push(this.contact);
          this.reguloFactor_2.push(this.contact);

         // this.neurodinamicFactor.push(this.contact);
        }
      }
      if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')) {
        let entranceItem = this.notBadSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation');
        if (entranceItem) {
          this.entranceDescription = entranceItem.description.toString().toLowerCase();
        //  this.reguloFactor.push(this.entranceDescription);
        //  this.neurodinamicFactor.push(this.entranceDescription);
        }
        if (!this.speechInitiation){
          this.speechInitiation = 'снижена';
          this.reguloFactor_2.push(this.speechInitiation);
          this.neurodinamicFactor_2.push(this.speechInitiation);
        }
      }

      if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'orientation')) {
        if (!this.orientation) {
          this.orientation = 'Общая осведомленность соответствует возрасту';
          regulationFromGeneral_subnormal.push(this.orientation);
          this.neurodinamicFactor_2.push(this.orientation);
          this.spaceFactor_2.push(this.orientation);
        }
        let orientationItem = this.notBadSymptoms.find((a: PropertyType) => a.name === 'orientation');
        if (orientationItem?.description?.length > 0) {
          this.orientationDescription = orientationItem.description.toString().toLowerCase();
          this.neurodinamicFactor_2.push(this.orientationDescription);
          this.spaceFactor_2.push(this.orientationDescription);
        }
      }
           if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'criticality')) {
             if (!this.criticality){
               this.criticality = 'Критичность сохранна,необходима незначительная регулирующая помощь';
               regulationFromGeneral_subnormal.push(this.criticality);
               this.reguloFactor_2.push( this.criticality);
             }
           }

           if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'adequancy')) {
             if (!this.adequancy) {
               this.adequancy = 'в целом адекватно';
               regulationFromGeneral_subnormal.push(this.adequancy);
               this.reguloFactor_2.push( this.adequancy);
             }
             let adequancyItem = this.notBadSymptoms.find((a: PropertyType) => a.name === 'adequancy');
             if (adequancyItem?.description?.length > 0) {
               this.adequancyDescription = adequancyItem.description.toString().toLowerCase();
               this.reguloFactor_2.push( this.adequancyDescription );
             }
           }

           if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'exportMotivation')) {
             if (!this.expert_motivation) {
               this.expert_motivation = 'формируется';
               regulationFromGeneral_subnormal.push(this.expert_motivation);
               this.reguloFactor_2.push(this.expert_motivation);
             }
           }

           if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'interest')) {
             if (!this.interest) {
               this.interest = 'Ребенок заинтересован в результатах выполнения заданий';
               regulationFromGeneral_subnormal.push(this.interest);
               this.reguloFactor_2.push(this.interest );
               this.neurodinamicFactor_2.push( this.interest);
             }
           }

          if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'emotionalState')) {
             let emotionalStateItemNotBad = this.notBadSymptoms.find((a: PropertyType) => a.name === 'emotionalState');
             if (emotionalStateItemNotBad?.description?.length > 0) {
               const reactionsToFilter = ['Реакции на успех/неуспех чрезмерные'];
               const reactions = emotionalStateItemNotBad.description
                 .toString()
                 .split(/,+/)
                 .filter((word: string) => reactionsToFilter.includes(word));
               this.reaction = reactions;
               this.emotional_stateDescription = emotionalStateItemNotBad.description.toString().toLowerCase();
               //this.regulation = 'недостаточен на уровне регуляции и контроля психической деятельности';
               this.neurodinamicFactor_2.push(this.emotional_stateDescription);
               this.reguloFactor_2.push(this.emotional_stateDescription);
               regulationFromGeneral_subnormal.push(this.emotional_stateDescription);
               regulationFromGeneral_subnormal.push(this.reaction);

             }
           }

           if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'understanding_instructions')) {
             if (!this.instructionUnderstanding) {
               this.instructionUnderstanding = 'усваивает со 2-го-3-го раза';
               regulationFromGeneral_subnormal.push(this.instructionUnderstanding);
               this.reguloFactor_2.push(this.instructionUnderstanding);
               this.gemisphereFactor_2.push(this.instructionUnderstanding);

             }
           }
           if (this.notBadSymptoms.find((a: PropertyType) => a.name ==='following_instructions')){
              if (!this.instructionFollowing) {
                this.instructionFollowing = 'удерживает самостоятельно в процессе выполнения заданий';
                regulationFromGeneral_subnormal.push(this.instructionFollowing);
                this.reguloFactor_2.push(this.instructionUnderstanding);
              }
           }

           if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'doing tasks')) {
             if (!this.tasks) {
               this.tasks = 'выполняет все и в полном объеме,с самокоррекцией';
               regulationFromGeneral_subnormal.push(this.tasks);
               this.reguloFactor_2.push(this.tasks);
             }
           }

           if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'accepting help')) {
             let helpItemnotBad = this.notBadSymptoms.find((a: PropertyType) => a.name === 'accepting help');
             if (helpItemnotBad?.descriptionGeneral?.length > 0) {
               this.help.push(helpItemnotBad.descriptionGeneral.toString());
               this.reguloFactor_2.push(this.help);
               this.neurodinamicFactor_2.push(this.help);
               regulationFromGeneral_subnormal.push(this.help);
             }
             if (helpItemnotBad?.descriptionNatureOfHelp?.length > 0) {
               this.helpDescription.push(helpItemnotBad.descriptionNatureOfHelp.toString());
               this.reguloFactor_2.push(this.helpDescription);
               this.neurodinamicFactor_2.push(this.helpDescription);
               regulationFromGeneral_subnormal.push(this.helpDescription);
             }
             if (helpItemnotBad?.descriptionWhereHelp?.length > 0) {
               this.helpPlace = helpItemnotBad.descriptionWhereHelp.toString();
               this.reguloFactor_2.push(this.helpPlace);
               this.neurodinamicFactor_2.push(this.helpPlace);
               regulationFromGeneral_subnormal.push(this.helpPlace );
             }
             if (helpItemnotBad && helpItemnotBad.descriptionEffectOfHelp && helpItemnotBad.descriptionEffectOfHelp.length > 0) {
               this.helpDescription.push(helpItemnotBad.descriptionEffectOfHelp.toString());
               this.reguloFactor_2.push(this.helpDescription);
               this.neurodinamicFactor_2.push(this.helpDescription);
               regulationFromGeneral_subnormal.push(this.helpDescription );
             }
           }

           if (this.notBadSymptoms.find((a: PropertyType) => a.name === 'perfomance')) {
             let workPropertiesNotBad = this.notBadSymptoms.find((a: PropertyType) => a.name === 'perfomance');
             if (workPropertiesNotBad?.descriptionTempo) {
               this.workTempo = workPropertiesNotBad.descriptionTempo.length > 0 ?workPropertiesNotBad.descriptionTempo.toString() : 'нормативный';
             }
             if (workPropertiesNotBad?.descriptionDinamic) {
               this.workDinamic = workPropertiesNotBad.descriptionDinamic.length > 0 ? workPropertiesNotBad.descriptionDinamic.toString() : 'стабильная';
             }

             if ( this.workTempo.length >= 1 && (this.workTempo.includes('замедленный') || this.workTempo.includes('ускоренный'))) {
               this.neurodinamic = 'дефицитарен';
             } else if (this.workDinamic.length >= 1 && (this.workDinamic.includes('неравномерная')||
               this.workDinamic.includes('с тенденцией к истощению' ) || this.workDinamic.includes('с тенденцией к врабатываемости')  ||
               this.workDinamic.includes('повышенная отвлекаемость от заданий'))){
               this.neurodinamic = 'дефицитарен';
               this.neurodinamicFactor_2.push(this.neurodinamic);
               if ( this.workDinamic.includes('с тенденцией к врабатываемости')  || this.workDinamic.includes('повышенная отвлекаемость от заданий')){
                 this.reguloFactor_2.push(this.neurodinamic);
               }
             }

            /* if (this.workTempo === 'замедленный' || this.workTempo === 'ускоренный' || this.workDinamic === 'неравномерная' ||
               this.workDinamic === 'с тенденцией к истощению' || this.workDinamic === 'с тенденцией к врабатываемости' ||
               this.workDinamic === 'повышенная отвлекаемость от заданий') {
               this.neurodinamic = 'дефицитарен';
             }*/ else {
               this.neurodinamic = 'достаточен';
             }
           }
      /*if (regulationFromGeneral_subnormal?.length >= 1 && !this.regulation){
        this.regulation = 'достаточен'
        console.log(regulationFromGeneral_subnormal);
        console.log( this.regulation);

      }*/
      console.log(regulationFromGeneral_subnormal);
         }




      //обработка 3 балла общий блок

      if (this.badSymptoms && this.badSymptoms.length > 0) {

        if (this.badSymptoms.find((a: PropertyType) => a.name === 'contact')){
          if (!this.contact){
            this.contact = 'доступен частично. Контакт неустойчивый';
            regulationFromGeneral_bad.push(this.contact);
            this.reguloFactor_3.push( this.contact );
          }
        }

        if (this.badSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')) {
          if (!this.conversation) {
            this.conversation = 'неохотно';
            regulationFromGeneral_bad.push(this.conversation);
            this.reguloFactor_3.push(this.conversation);
          }
          let entranceItem = this.badSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')
          console.log(entranceItem)
          if (entranceItem?.description?.length > 0) {
            this.entranceDescription = entranceItem.description.toString().toLowerCase();
          }
            if (!this.speechInitiation){
              this.speechInitiation = 'снижена';
              regulationFromGeneral_bad.push( this.speechInitiation);
              this.reguloFactor_3.push(this.speechInitiation);
            }

        }

        if (this.badSymptoms.find((a: PropertyType) => a.name === 'orientation')){
          if (!this.orientation){
            this.orientation = 'Общая осведомленность снижена';
            regulationFromGeneral_bad.push(this.orientation);
            this.reguloFactor_3.push(this.orientation);
            this.spaceFactor_3.push(this.orientation);
          }
          let orientationItem = this.badSymptoms.find((a: PropertyType) => a.name === 'orientation')
          if (orientationItem?.description?.length >0) {
            this.orientationDescription = orientationItem.description.toString().toLowerCase();
            regulationFromGeneral_bad.push(this.orientationDescription);
            this.spaceFactor_3.push(this.orientationDescription);

          }
        }

        if ( this.badSymptoms.find((a: PropertyType) => a.name ==='criticality')) {
          if (!this.criticality) {
            this.criticality = 'Критичность снижена';
            regulationFromGeneral_bad.push(this.criticality);
            this.reguloFactor_3.push(this.criticality);
          }
        }
          if (this.badSymptoms.find((a: PropertyType) => a.name ==='adequancy')){
            if (!this.adequancy){
              this.adequancy = 'неадекватно';
              regulationFromGeneral_bad.push(this.adequancy);
              this.reguloFactor_3.push(this.adequancy);
            }
            let adequancyItem = this.badSymptoms.find((item: PropertyType) => item.name === 'adequancy')
            if (adequancyItem && adequancyItem.description && adequancyItem.description.length >0) {
              this.adequancyDescription = adequancyItem.description.toString().toLowerCase();
              this.reguloFactor_3.push(this.adequancyDescription);
              regulationFromGeneral_bad.push(this.adequancyDescription);
            }
          }


        //подумать гла взять данные для нарушения дистанции
        if (this.badSymptoms.find((a: PropertyType) => a.name === 'exportMotivation')){
          if (!this.expert_motivation){
            this.expert_motivation = 'снижена';
            regulationFromGeneral_bad.push(this.expert_motivation);
            this.reguloFactor_3.push(this.expert_motivation);
          }
        }

        if  (this.badSymptoms.find((a: PropertyType) => a.name ==='interest')){
          if (!this.interest){
            this.interest = 'Заинтересованность в результатах выполнения заданий снижена';
            regulationFromGeneral_bad.push(this.interest);
            this.reguloFactor_3.push(this.interest);
          }
        }

        if (this.badSymptoms.find((a: PropertyType) => a.name === 'emotionalState')){
          let emotionalStateItemBad = this.badSymptoms.find((a: PropertyType) => a.name === 'emotionalState')
          if (emotionalStateItemBad?.description?.length >0) {
            let reactionsRemovw = ['Реакции на успех/неуспех чрезмерные']
            let reactions = emotionalStateItemBad.description.toString()
              .split(/,+/)
              .filter((word:string) => reactionsRemovw.includes(word))
            this.reaction = reactions;
            this.emotional_stateDescription = emotionalStateItemBad.description.toString().toLowerCase();
            regulationFromGeneral_bad.push(this.emotional_stateDescription);
            regulationFromGeneral_bad.push(this.reaction);

            this.regulationFromGeneral = 'недостаточен на уровне регуляции и контроля психической деятельности';
            this.reguloFactor_3.push(this.emotional_stateDescription);
            this.reguloFactor_3.push(this.reaction);
            this.neurodinamicFactor_3.push(this.emotional_stateDescription);
            this.neurodinamicFactor_3.push(this.reaction);

          }
        }

        if (this.badSymptoms.find((a: PropertyType) => a.name === 'understanding_instructions')){
          if (!this.instructionUnderstanding){
            this.instructionUnderstanding = 'усваивает со 2-го-3-го раза с развернутым разъяснением';
            regulationFromGeneral_bad.push(this.instructionUnderstanding);
            this.reguloFactor_3.push(this.instructionUnderstanding);
            this.gemisphereFactor_3.push(this.instructionUnderstanding);
          }
        }

        if (this.badSymptoms.find((a: PropertyType) => a.name ==='following_instructions')){
          if (!this.instructionFollowing) {
            this.instructionFollowing = 'самостоятельно удерживает с трудом, необходима помощь со стороны обследующего';
            regulationFromGeneral_bad.push(this.instructionFollowing);
            this.reguloFactor_3.push(this.instructionFollowing);

          }
        }

        if (this.badSymptoms.find((a: PropertyType) => a.name ==='doing tasks')){
          if (!this.tasks){
            this.tasks = 'выполняет не все и не в полном объеме';
            regulationFromGeneral_bad.push(this.tasks);
            this.reguloFactor_3.push(this.tasks);

          }
        }

        if (this.badSymptoms.find((a: PropertyType) => a.name === 'accepting help')){
          let helpItemBad = this.badSymptoms.find((a: PropertyType) => a.name === 'accepting help')
          if (helpItemBad?.descriptionGeneral?.length > 0) {
            this.help.push(helpItemBad.descriptionGeneral.toString());
            regulationFromGeneral_bad.push(this.help);
            this.reguloFactor_3.push( this.help);
          }
          if (helpItemBad?.descriptionNatureOfHelp?.length > 0) {

            this.helpDescription.push(helpItemBad.descriptionNatureOfHelp.toString()) ;
            regulationFromGeneral_bad.push(this.helpDescription);
            this.reguloFactor_3.push(this.helpDescription);
          }
          if (helpItemBad?.descriptionWhereHelp?.length > 0) {
            this.helpPlace = helpItemBad.descriptionWhereHelp.toString();
            regulationFromGeneral_bad.push(this.helpPlace);
            this.reguloFactor_3.push(this.helpPlace);
          }
          /* if (helpItemBad && helpItemBad.descriptionEffectOfHelp && helpItemBad.descriptionEffectOfHelp.length > 0) {
             this.helpDescription.push(helpItemBad.descriptionEffectOfHelp.toString()) ;
           }*/
        }

        if (this.badSymptoms.find((a: PropertyType) => a.name === 'perfomance')){
          let workProperties = this.badSymptoms.find((a: PropertyType) => a.name === 'perfomance');
          if (workProperties?.descriptionTempo) {
            this.workTempo = workProperties.descriptionTempo.length >0? workProperties.descriptionTempo.toString() : '';
          //  regulationFromGeneral_bad.push(this.workTempo);
          }
          if (workProperties?.descriptionDinamic ){
            this.workDinamic = workProperties.descriptionDinamic.length >0? workProperties.descriptionDinamic.toString() : '';

          }
          if ( this.workTempo.length >= 1 && (this.workTempo.includes('замедленный') || this.workTempo.includes('ускоренный'))) {
            this.neurodinamic = 'дефицитарен';
           // regulationFromGeneral_bad.push(this.neurodinamic);
            this.neurodinamicFactor_3.push(this.neurodinamic);

          } else if (this.workDinamic.length >= 1 && (this.workDinamic.includes('неравномерная')||
            this.workDinamic.includes('с тенденцией к истощению' ) || this.workDinamic.includes('с тенденцией к врабатываемости')  ||
            this.workDinamic.includes('повышенная отвлекаемость от заданий'))){
            this.neurodinamic = 'дефицитарен';
          //  regulationFromGeneral_bad.push(this.neurodinamic);
          //  regulationFromGeneral_bad.push(this.workDinamic);
              if (!this.neurodinamic){
                this.neurodinamicFactor_3.push(this.neurodinamic);
              }
          }
        }
       /* if (regulationFromGeneral_bad?.length > 1 && !this.regulation){
          this.regulation = 'выраженно недостаточен на уровне регуляции и контроля психической деятельности'
          console.log(regulationFromGeneral_bad);
          console.log(this.regulation);
        }*/
        console.log(regulationFromGeneral_bad);
        }

//обработка 4 балла общий блок //вставить массив факторов//
      if (this.worseSymptoms && this.worseSymptoms.length >0) {

        if (this.worseSymptoms.find((a: PropertyType) => a.name=== 'orientation')){
          if (!this.orientation){
            this.orientation = 'Дезориентирован';
            regulationFromGeneral_worse.push(this.orientation);
          }
          let orientationItem = this.worseSymptoms.find((a: PropertyType) => a.name === 'orientation')
          if (orientationItem?.description?.length >0) {
            this.orientation = 'Дезориентирован';
            this.orientationDescription = orientationItem.description.toString().toLowerCase();

          }
        }

        if (this.worseSymptoms.find((a: PropertyType) => a.name === 'contact')){
          if (!this.contact){
            this.contact = 'недоступен';
            regulationFromGeneral_worse.push(this.contact);
          }
        }

        if (this.worseSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')){
          let entranceItem = this.worseSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')

          if (entranceItem?.description?.length >0) {
            this.entranceDescription = entranceItem.description.toString().toLowerCase();
          }
        }

        if (this.worseSymptoms.find((a: PropertyType) => a.name === 'criticality')){
          if (!this.criticality){
            this.criticality = 'Безразличен к своему состоянию, поведению и оценкам взрослого';
            regulationFromGeneral_worse.push(this.criticality);
          }
        }

        if ( this.worseSymptoms.find((a: PropertyType) => a.name ==='adequancy')){
          if (!this.adequancy) {
            this.adequancy = 'неадекватно';
            regulationFromGeneral_worse.push(this.adequancy);
          }

          let worseAdequancy = this.worseSymptoms.find((a: PropertyType) => a.name === 'adequancy');
          if (worseAdequancy && worseAdequancy.description) {
            this.adequancyDescription = worseAdequancy.description.length > 0 ? worseAdequancy.description.toString().toLowerCase() : '';
          }
        }
          if (this.worseSymptoms.find((a: PropertyType) => a.name ==='exportMotivation')){
            if (!this.expert_motivation) {
              this.expert_motivation = 'не формируется';
              regulationFromGeneral_worse.push(this.expert_motivation);
            }
          }

            if ( this.worseSymptoms.find((a: PropertyType) => a.name ==='understanding_instructions')){
              if (!this.instructionUnderstanding) {
                this.instructionUnderstanding = 'не усваивает даже с массированной помощью';
                regulationFromGeneral_worse.push( this.instructionUnderstanding);
              }
            }

        if (this.worseSymptoms.find((a: PropertyType) => a.name ==='following_instructions')){
          if (!this.instructionFollowing) {
            this.instructionFollowing = 'не удерживает даже при массированной помощи';
            regulationFromGeneral_worse.push(this.instructionFollowing);
          }
        }

            if ( this.worseSymptoms.find((a: PropertyType) => a.name ==='doing tasks')){
              if (!this.tasks){
                this.tasks = 'не может выполнить даже с массированной помощью';
                regulationFromGeneral_worse.push(this.tasks);
              }
            }

            if (this.worseSymptoms.find((a: PropertyType) => a.name ==='accepting help')){
              if (!this.helpAccepting){
                this.helpAccepting = 'не принимает';
                regulationFromGeneral_worse.push(this.helpAccepting);
              }
            }

            if (this.worseSymptoms.find((a: PropertyType) => a.name === 'perfomance')){
              let workPropertiesWorse = this.worseSymptoms.find((a: PropertyType) => a.name === 'perfomance');

              if (workPropertiesWorse?.descriptionTempo) {
                this.workTempo = workPropertiesWorse.descriptionTempo.length >0? workPropertiesWorse.descriptionTempo.toString() : '';
              }
              if (workPropertiesWorse?.descriptionDinamic ){
                this.workDinamic = workPropertiesWorse.descriptionDinamic.length >0? workPropertiesWorse.descriptionDinamic.toString() : '';
              }
              if ( this.workTempo.length >= 1 && (this.workTempo.includes('замедленный') || this.workTempo.includes('ускоренный'))) {
                this.neurodinamic = 'дефицитарен';
               // regulationFromGeneral_worse.push(this.neurodinamic);
              } else if (this.workDinamic.length >= 1 && (this.workDinamic.includes('неравномерная')||
                this.workDinamic.includes('с тенденцией к истощению' ) || this.workDinamic.includes('с тенденцией к врабатываемости')  ||
                this.workDinamic.includes('повышенная отвлекаемость от заданий'))){
                this.neurodinamic = 'дефицитарен';
                if (!this.neurodinamic){
                  //regulationFromGeneral_worse.push(this.neurodinamic);
                }

              }
            }
        /*if (regulationFromGeneral_worse?.length >1 && !this.regulation){
          this.regulation = 'грубо недостаточен на уровне регуляции и контроля психической деятельности'
          console.log(regulationFromGeneral_worse);
          console.log(this.regulation);
        }*/
        console.log(regulationFromGeneral_worse);
            }
    //сравнение массивов по регуляторке
    //возвращает длину самого длинного массива
   // let arrays = [regulationFromGeneral_normal, regulationFromGeneral_subnormal, regulationFromGeneral_bad, regulationFromGeneral_worse];

  //  let maxLength = Math.max(...arrays.map(arr => arr.length));
  //  console.log(maxLength);

//возвращает содержание самого длинного массива
 //   let arrays_longest = [regulationFromGeneral_normal, regulationFromGeneral_subnormal, regulationFromGeneral_bad, regulationFromGeneral_worse];

  //  let longest = arrays_longest.reduce((max, current) => {
  //    return current.length > max.length ? current : max;
  //  });

 //   console.log(longest);
  }



  giveValuesFromObjectiveBlokForMakingRaport() {

//обработка данных 1 балл
    if (this.objectiveZeroSymptoms.length > 0){
// Определяем интерфейс для item
      // Интерфейс компонента (замени `ThisComponent` на название твоего компонента, если хочешь экспортировать тип)
      type RaportPageComponent = {
        [key: string]: string | undefined;
      };
      interface Item {
        description?: string;
      }

// Интерфейс конфигурации для динамической обработки
      interface FieldConfig {
        target: keyof RaportPageComponent;
        norm?: keyof RaportPageComponent;
        default?: string;
      }


      let namesArrayForZero: any = this.objectiveZeroSymptoms.flat(1).map(item => item.name);
      namesArrayForZero.forEach((name:string) => {
        const item: any = this.objectiveZeroSymptoms.flat(1).find(item => item.name === name);
        const map: Record<string, FieldConfig> = {
          'dinamicPracsis': { target: 'dinamic_pracsis', norm: 'dinamic_pracsis_norm', default: 'Динамический праксис без особенностей' },
          'reciproknaya': { target: 'reciprok', norm: 'reciprok_norm', default: 'Реципрокная координация без особенностей' },
          'positionsPracsis': { target: 'position_pracsis', norm: 'position_pracsis_norm', default: 'Праксис поз без особенностей' },
          'positionsOralPracsis': { target: 'oral_pracsis', norm: 'oral_pracsis_norm', default: 'Оральный праксис без особенностей' },
          'grafics': { target: 'grafics_pracsis', norm: 'grafics_pracsis_norm', default: 'Графическая проба без особенностей' },
          'hed': { target: 'heads_test', norm: 'heads_test_norm', default: 'Проба Хэда выполняется без особенностей' },
          'ears_motors': { target: 'listen_motor_test', norm: 'listen_motor_test_norm', default: 'Проба на слухомоторные координации выполняется без особенностей' },
          'eyes': { target: 'eyes_test', norm: 'eyes_test_norm', default: 'Глазодвигательный праксис без особенностей' },
          'constructor': { target: 'constract_pracsis', norm: 'constract_pracsis_norm', default: 'Конструктивный праксис без особенностей' },
          'copy_kube': { target: 'kube_copy', norm: 'kube_copy_norm', default: 'Выполняет рисунок по инструкции без ошибок' },
          'choise_reaction': { target: 'choice_reaction', norm: 'choice_reaction_norm', default: 'Проба на реакцию выбора выполняется без ошибок' },
          'vision gnosis': { target: 'visiual_gnosis', norm: 'visiual_gnosis_norm', default: 'Зрительный предметный гнозис без особенностей' },
          'vision_space gnosis': { target: 'visiual_space_gnosis', norm: 'visiual_space_gnosis_norm', default: 'Зрительно-прострнаственнный гнозис без особенностей' },
          'vision_symbolic gnosis': { target: 'visiual_symbolic_gnosis', norm: 'visiual_symbolic_gnosis_norm', default: 'Зрительный символический гнозис без особенностей' },
          'auditory gnosis': { target: 'auditional_gnosis', norm: 'auditional_gnosis_norm', default: 'Слуховой неречевой гнозис без особенностей' },
          'sensor gnosis': { target: 'sensor_gnosis', norm: 'sensor_gnosis_norm', default: 'Тактильный гнозис без особенносетй' },
          'emotional gnosis': { target: 'emotional_gnosis', norm: 'emotional_gnosis_norm', default: 'Эмоциональный гнозис без особенностей' },
          'copy gnosis': { target: 'copy_gnosis', norm: 'copy_gnosis_norm', default: 'Сложные фигуры Тейлора и Рея-Остеррица копирует самостоятельно и без ошибок' },
          'copy_simple gnosis': { target: 'copy_simple_gnosis', norm: 'copy_simple_gnosis_norm', default: 'Простые фигуры копирует самостоятельно и без ошибок' },
          'vision_space_memory': { target: 'visial_space_memory', norm: 'visial_space_memory_norm', default: 'Зрительно-пространственная память достаточна по объему и прочности' },
          'vision_memory': { target: 'visiual_memory',norm: 'visiual_memory_norm', default: 'Зрительная память достаточна по объему и прочности' },
          'audit_memory': { target: 'audit_memory',norm: 'audit_memory_norm', default: 'Слухоречевая память достаточна по объему и прочности' },
          'audit_memory_2_3': { target: 'audit_memory_2_3',norm: 'audit_memory_2_3_norm', default: 'Слухоречевая память достаточна по объему и прочности' },
          'attention': { target: 'attention' }
        };

// Конфигурации с фиксированными фразами
        const fixedMap: Record<string, { target: keyof RaportPageComponent; value: string }> = {
          'understanding': { target: 'text_meaning', value: 'доступно' },
          'understanding serial pictures': { target: 'causal_link', value: 'Причинно-следственные связи устанавливает самостоятельно' },
          'understanding pictures': { target: 'pictures_understanding', value: 'доступно' },
          'understanding proverbs': { target: 'proverbs', value: 'доступно' }
        };
        if (item) {
          const description = item.description?.toString();
          const config = map[name];
          const fixed = fixedMap[name];


          if (config) {
            if (description) {
              this[config.target] = description;
            } else if (config.norm && config.default) {
              this[config.norm] = config.default;
            }

            if (config.norm) console.log(this[config.norm]);
          } else if (fixed) {
            this[fixed.target] = fixed.value;
          }
          switch (item.name){
            case 'serial counting':
              this.calculating_norm = item.description.toString()?'В пробе на серийный счет отмечаются ' + item.description.toString() : 'Серийный счет выполняет самостоятельно, без ошибок' ;
              let calculating = item.description.toString();
              let removefromcalculating = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let removePsyMoveFromcalculating = ['персеверации'];
              let removeControlFromcalculating = ['импульсивность'];
              let removeDinamicFromcalculating = ['флуктуации'];
              /*  this.calculating = calculating
                  .split(/,+/)
                  .filter((word:string) => !removefromcalculating.includes(word))
                  .join(' ');*/
              let control_in_calculating = calculating.split(/,+/).filter((word:string) => removeControlFromcalculating.includes(word)).join(' ');
              if (control_in_calculating && (this.regulationFromGeneral === '1')){
                this.control = 'трудностями контроля';
              }
              let psymove_in_calculating = calculating.split(/,+/).filter((word:string) => removePsyMoveFromcalculating.includes(word)).join(' ');
              if (psymove_in_calculating){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_calculating = calculating.split(/,+/).filter((word:string) => removeDinamicFromcalculating.includes(word)).join(' ');
              if (dinamic_in_calculating){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving tasks':
              this.solving_tasks_norm = item.description.toString()? 'При решении примеров отмечаются ' + item.description.toString() : 'Примеры решает самостоятельно';
              let solving_tasks = item.description.toString();
              let removefromsolving_tasks = ["флуктуации","аспонтанность","импульсивность","персеверации", "трудности удержания промежуточного результата"];
              let removePsyMoveFromsolving_tasks = ['персеверации'];
              let removeControlFromsolving_tasks = ['импульсивность'];
              let removeDinamicFromsolving_tasks = ['флуктуации'];
              let removeOperationFromsolving_tasks = ['трудности удержания промежуточного результата'];
              /*    this.solving_tasks = solving_tasks
                    .split(/,+/)
                    .filter((word:string) => !removefromsolving_tasks.includes(word))
                    .join(' ');*/
              let control_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeControlFromsolving_tasks.includes(word)).join(' ');
              if (control_in_solving_tasks && (this.regulationFromGeneral === '1')){
                this.control = 'трудностями контроля';
              }
              let psymove_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removePsyMoveFromsolving_tasks.includes(word)).join(' ');
              if (psymove_in_solving_tasks){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeDinamicFromsolving_tasks.includes(word)).join(' ');
              if (dinamic_in_solving_tasks){
                this.sinus = 'флуктуациями';
              }
              let operation_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeOperationFromsolving_tasks.includes(word)).join(' ');
              if (operation_in_solving_tasks){
                this.operation_memory = 'сужением объема оперативной памяти';
              }
              break;
            case 'solving problems':
              this.solving_problems_norm = item.description.toString()? 'При решении задач отмечаются ' + item.description.toString() : 'Задачи решает самостоятельно';
              let solving_problems = item.description.toString();
              let remove_problems = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let removePsyMove = ['персеверации'];
              let removeControl = ['импульсивность'];
              let removeDinamic = ['флуктуации'];
              let removeOperation = ['трудности удержания промежуточного результата'];
              /* this.solving_problems = solving_problems
                 .split(/,+/)
                 .filter((word:string) => !remove_problems.includes(word))
                 .join(' ');*/
              let control_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeControl.includes(word)).join(' ');
              if (control_in_solving_problems && (this.regulationFromGeneral === '1')){
                this.control = 'трудностями контроля';
              }
              let psymove_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removePsyMove.includes(word)).join(' ');
              if (psymove_in_solving_problems){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeDinamic.includes(word)).join(' ');
              if (dinamic_in_solving_problems){
                this.sinus = 'флуктуациями';
              }
              let operation_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeOperation.includes(word)).join(' ');
              if (operation_in_solving_problems){
                this.operation_memory = 'сужением объема оперативной памяти';
              }
              break;
            case 'solving analog':
              this.analog_norm = item.description.toString()? 'В пробе на установление аналогий отмечаются ' + item.description.toString() : 'Аналогии уставанавливает самостоятельно' ;
              let analog = item.description.toString();
              let removefromAnalog = ["флуктуации", "аспонтанность","импульсивность", "персеверации"];
              let removePsyMoveFromAnalog = ['персеверации'];
              let removeControlFromAnalog = ['импульсивность'];
              let removeDinamicFromAnalog = ['флуктуации'];
              /* this.analog =  analog
                 .split(/,+/)
                 .filter((word:string) => !removefromAnalog.includes(word))
                 .join(' ');*/
              let control_in_analog = analog.split(/,+/).filter((word:string) => removeControlFromAnalog.includes(word)).join(' ');
              if (control_in_analog && (this.regulationFromGeneral === '1')){
                this.control = 'трудностями контроля';
              }
              let psymove_in_analog = analog.split(/,+/).filter((word:string) => removePsyMoveFromAnalog.includes(word)).join(' ');
              if (psymove_in_analog){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_analog = analog.split(/,+/).filter((word:string) => removeDinamicFromAnalog.includes(word)).join(' ');
              if (dinamic_in_analog){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving exclude':
              this.exclude_4_norm = item.description.toString()? 'В пробе на исключение 4-лишнего отмечаются ' +  item.description.toString() : '4-лишний исключает по категориальному и функциональному признаку';
              let exclude_4 = item.description.toString();
              let remove2 = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let rmcontrolfromex = ["импульсивность"];
              let rmMoveFromEx = ["персеверации"];
              let rmDinamicFromEx = ["флуктуации"];
              /* this.exclude_4 = exclude_4
                 .split(/,+/)
                 .filter((word:string) => !remove2.includes(word))
                 .join(' ');*/
              let controlProblems = exclude_4.split(/,+/).filter((word:string) => rmcontrolfromex.includes(word)).join(' ');
              if (controlProblems && (this.regulationFromGeneral === '1')){
                this.control = 'трудностями контроля';
              }
              let move_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmMoveFromEx.includes(word)).join(' ');
              if (move_in_exclude_4){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmDinamicFromEx.includes(word)).join(' ');
              if (dinamic_in_exclude_4){
                this.sinus = 'флуктуациями';
              }
              break;
          }
        }
      });
    }
//обработка данных  2 балла
    //обработка значений объективной части  = 2 балла
    if (  this.objectiveNotBadSymptoms.length >0){
     // let regulationNormal: string [] = [];
      let namesArray3: any = this.objectiveNotBadSymptoms.flat(1).map(item => item.name);


      namesArray3.forEach((name:string) => {
        const item: any = this.objectiveNotBadSymptoms.flat(1).find(item => item.name === name);
        if (item) {
          switch (name) {
            case 'dinamicPracsis':
              //   let dinamic_pracsis = item.description.toString();
              //    let remove = 'персеверации';
              //  this.dinamic_pracsis = dinamic_pracsis.split(remove)
              if (item.descriptionSpeed){
                this.dinamic_pracsis_speed = item.descriptionSpeed.toString();
              }
                this.dinamic_pracsis = item.description.toString();
              break;
            case 'reciproknaya':
              this.reciprok = item.description.toString();
              break;
            case  'positionsPracsis':
              this.position_pracsis = item.description.toString();
              break;
            case  'positionsOralPracsis':
              this.oral_pracsis = item.description.toString();
              break;
            case 'grafics':
              this.grafics_pracsis = item.description.toString();
              break;
            case 'hed':
              this.heads_test = item.description.toString();
              break;
            case 'ears_motors':
              if (item.descriptionEval.length <= 0 && item.descriptionDoing.length <= 0 && item.descriptionDoingByInstruction.length <= 0 ){
                this.listen_motor_test_norm = 'Проба на слухомоторные координации выполняется с единичными ошибками с самокоррекцией';
              }
              if (item.descriptionEval != ''){
                this.listen_motor_test_eval = item.descriptionEval.toString();
              }
              if (item.descriptionDoing){
                this.listen_motor_test = item.descriptionDoing.toString();
              }
              if (item.descriptionDoingByInstruction){
                this.listen_motor_test_instruction = item.descriptionDoingByInstruction.toString();
              }
              break;
            case 'eyes':
              this.eyes_test = item.description.toString();
              break;
            case 'constructor':
              this.constract_pracsis = item.description.toString();
              break;
            case 'copy_kube':
              if (item.descriptionDrawingByInstruction.length <= 0 && item.descriptionCopy.length <= 0 ){
                this.kube_copy_norm = 'Рисование стола/куба по инструкции доступно'
              }
              if (item.descriptionDrawingByInstruction){
                this.kube_draw = item.descriptionDrawingByInstruction.toString()
              }
              if (item.descriptionCopy){
                this.kube_copy = item.descriptionCopy.toString();
              }
              break;
            case 'choise_reaction':
              this.choice_reaction = item.description.toString();
              break;
            case 'vision gnosis':
              this.visiual_gnosis = item.description.toString();
              break;
            case 'vision_space gnosis':
              this.visiual_space_gnosis = item.description.toString();
              break;
            case 'vision_symbolic gnosis':
              this.visiual_symbolic_gnosis = item.description.toString();
              break;
            case 'auditory gnosis':
              this.auditional_gnosis = item.description.toString();
              break;
            case 'sensor gnosis':
              this.sensor_gnosis = item.description.toString();
              break;
            case 'emotional gnosis':
              this.emotional_gnosis = item.description.toString();
              break;
            case 'copy gnosis':
              this.copy_gnosis = item.description.toString();
              break;
            case 'copy_simple gnosis':
              if (item.description.length <=0){
                this.copy_simple_gnosis_norm = 'Копирует с незначительными ошибками'
              } else {
                this.copy_simple_gnosis = item.description.toString();
              }
              break;
            case 'vision_space_memory':
              if (item.description.toString()){
                this.visial_space_memory = 'Зрительно-пространственная память достаточна по объему и прочности. При этом отмечаются ' +  item.description.toString();
              } else{
                this.visial_space_memory_norm = 'Зрительно-пространственная память достаточна по объему  прочности'
              }
             // this.visial_space_memory = item.description.toString();
              break;
            case 'vision_memory':
              if (item.description.toString()){
                this.visiual_memory = 'Зрительная память достаточна по объему и прочности. При этом отмечаются ' + item.description.toString();
              } else{
                this.visiual_memory_norm = 'Зрительная память достаточна по объему и прочности'
              }
              break;
            case 'audit_memory':
              if (item.description.toString()){
                this.audit_memory = 'Слухоречевая память достаточна по объему и прочности. При этом отмечаются ' + item.description.toString();
              } else{
                this.audit_memory_norm = 'Слухоречевая память достаточна по объему и прочности';
              }
              break;
            case 'audit_memory_2_3':
              if (item.description.toString()){
                this.audit_memory_2_3 = 'Слухоречевая память достаточна по объему и прочности. При этом отмечаются ' +  item.description.toString();
              } else{
                this.audit_memory_2_3_norm = 'Слухоречевая память достаточна по объему и прочности';
              }

              break;
            case 'serial counting':
              this.calculating_norm = item.description.toString()? 'При исследовании серийного счета отмечаются ' + item.description.toString() : 'Серийный счет доступен с единичными ошибками с самокоррекцией' ;
              let calculating = item.description.toString();

              let removefromcalculating = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let removePsyMoveFromcalculating = ['персеверации'];
              let removeControlFromcalculating = ['импульсивность'];
              let removeDinamicFromcalculating = ['флуктуации'];
            /*  this.calculating = calculating
                .split(/,+/)
                .filter((word:string) => !removefromcalculating.includes(word))
                .join(' ');*/
              let control_in_calculating = calculating.split(/,+/).filter((word:string) => removeControlFromcalculating.includes(word)).join(' ');
              if (control_in_calculating && (this.regulationFromGeneral === '2')){
                this.control = 'трудностями  регуляции и контроля';
              }
              let psymove_in_calculating = calculating.split(/,+/).filter((word:string) => removePsyMoveFromcalculating.includes(word)).join(' ');
              if (psymove_in_calculating){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_calculating = calculating.split(/,+/).filter((word:string) => removeDinamicFromcalculating.includes(word)).join(' ');
              if (dinamic_in_calculating){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving tasks':
              this.solving_tasks_norm = item.description.toString()? 'При решении примеров отмечаются ' + item.description.toString() : 'При решении примеров возникающие ошибки замечает и коррекцтирует самостоятельно' ;
              let solving_tasks = item.description.toString();
              let removefromsolving_tasks = ["флуктуации","аспонтанность","импульсивность","персеверации", 'трудности удержания промежуточного результата'];
              let removePsyMoveFromsolving_tasks = ['персеверации'];
              let removeControlFromsolving_tasks = ['импульсивность'];
              let removeDinamicFromsolving_tasks = ['флуктуации'];
              let removeOperationFromsolving_tasks = ['трудности удержания промежуточного результата'];
          /*    this.solving_tasks = solving_tasks
                .split(/,+/)
                .filter((word:string) => !removefromsolving_tasks.includes(word))
                .join(' ');*/
              let control_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeControlFromsolving_tasks.includes(word)).join(' ');
              if (control_in_solving_tasks && (this.regulationFromGeneral === '2')){
                this.control = 'трудностями регуляции и  контроля';
              }
              let psymove_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removePsyMoveFromsolving_tasks.includes(word)).join(' ');
              if (psymove_in_solving_tasks){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeDinamicFromsolving_tasks.includes(word)).join(' ');
              if (dinamic_in_solving_tasks){
                this.sinus = 'флуктуациями';
              }
              let operation_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeOperationFromsolving_tasks.includes(word)).join(' ');
              if (operation_in_solving_tasks){
                this.operation_memory = 'снижением объема оперативной памяти';
              }
              break;
            case 'solving problems':
              this.solving_problems_norm = item.description.toString()? 'При решении задач отмечаются ' + item.description.toString() : 'Задачи решает самостоятельно, ошибки замечает и исправляет самостоятельно' ;
              let solving_problems = item.description.toString();
              let remove_problems = ["флуктуации","аспонтанность","импульсивность","персеверации", 'трудности удержания промежуточного результата'];
              let removePsyMove = ['персеверации'];
              let removeControl = ['импульсивность'];
              let removeDinamic = ['флуктуации'];
              let removeOperation = ['трудности удержания промежуточного результата'];
             /* this.solving_problems = solving_problems
                .split(/,+/)
                .filter((word:string) => !remove_problems.includes(word))
                .join(' ');*/
              let control_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeControl.includes(word)).join(' ');
              if (control_in_solving_problems && (this.regulationFromGeneral === '2')){
                this.control = 'трудностями регуляции и контроля';
              }
              let psymove_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removePsyMove.includes(word)).join(' ');
              if (psymove_in_solving_problems){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeDinamic.includes(word)).join(' ');
              if (dinamic_in_solving_problems){
                this.sinus = 'флуктуациями';
              }
              let operation_in_solving_problems = solving_problems.split(/,+/).filter((word:string) =>removeOperation.includes(word)).join(' ');
              if (operation_in_solving_problems){
                this.operation_memory = 'снижением объема оперативной памяти';
              }
              break;
            case 'solving analog':
              this.analog_norm = item.description.toString()? 'При установлении аналогий отмечаются ' + item.description.toString() : 'Аналогии устанавливает самостоятельно с незначительной помощью' ;
              let analog = item.description.toString();
              let removefromAnalog = ["флуктуации", "аспонтанность","импульсивность", "персеверации"];
              let removePsyMoveFromAnalog = ['персеверации'];
              let removeControlFromAnalog = ['импульсивность'];
              let removeDinamicFromAnalog = ['флуктуации'];
             /* this.analog =  analog
                .split(/,+/)
                .filter((word:string) => !removefromAnalog.includes(word))
                .join(' ');*/
              let control_in_analog = analog.split(/,+/).filter((word:string) => removeControlFromAnalog.includes(word)).join(' ');
              if (control_in_analog && (this.regulationFromGeneral === '2')){
                this.control = 'трудностями регуляции и контроля';
              }
              let psymove_in_analog = analog.split(/,+/).filter((word:string) => removePsyMoveFromAnalog.includes(word)).join(' ');
              if (psymove_in_analog){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_analog = analog.split(/,+/).filter((word:string) => removeDinamicFromAnalog.includes(word)).join(' ');
              if (dinamic_in_analog){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving exclude':
              this.exclude_4_norm = item.description.toString()? '' + item.description.toString() : '' ;
              let exclude_4 = item.description.toString();
              let remove2 = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let rmcontrolfromex = ["импульсивность"];
              let rmMoveFromEx = ["персеверации"];
              let rmDinamicFromEx = ["флуктуации"];
             /* this.exclude_4 = exclude_4
                .split(/,+/)
                .filter((word:string) => !remove2.includes(word))
                .join(' ');*/
              let controlProblems = exclude_4.split(/,+/).filter((word:string) => rmcontrolfromex.includes(word)).join(' ');
              if (controlProblems && (this.regulationFromGeneral === '2')){
                this.control = 'трудностями регуляции и контроля';
              }
              let move_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmMoveFromEx.includes(word)).join(' ');
              if (move_in_exclude_4){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmDinamicFromEx.includes(word)).join(' ');
              if (dinamic_in_exclude_4){
                this.sinus = 'флуктуациями';
              }
              break;
            case  'understanding':
              this.text_meaning = 'доступно с незначительной организующей помощью'
              break;
            case  'understanding serial pictures':
              this.causal_link = 'Причинно-следственные связи устанавливает с незначительной организующей помощью';
              break;
            case 'understanding pictures':
              this.pictures_understanding = 'доступно с незначительной организующей помощью';
              break;
            case  'understanding proverbs':
              this.proverbs = 'доступно с незначительной организующей помощью';
              break;
            case  'attention':
              this.attention = item.description.toString();
              break;
            default:
              break;
          }
        }
      });
    }
    //обработка данных  2 балла
    if (this.objectiveNotBadSymptoms && this.objectiveNotBadSymptoms.length > 0) {
      //добавить такой же блок кода в обработку нормы (Zerosymptoms)
      let descriptionsFromNotBadSymptomsArr = this.objectiveNotBadSymptoms.flat(1).map(item => item.description)

      let descriptionsFromNotBadSymptomsArr_flatted = descriptionsFromNotBadSymptomsArr.flat(1)

      if (descriptionsFromNotBadSymptomsArr_flatted.length > 0 ) {
        let ram = descriptionsFromNotBadSymptomsArr_flatted.filter(item => item?.trimEnd() === 'трудности удержания промежуточного результата'
          || item?.trimEnd() === 'контаминации обеих групп' ||
          item?.trimEnd() === 'ошибки в единицах' );

        if (ram?.length >= 1) {
          this.ram_value = 'характеризуется недостаточностью оперативной памяти'

        }
        let programMovementsProblems = descriptionsFromNotBadSymptomsArr_flatted.filter(item => item?.trimEnd() === 'упрощение программы'
          || item?.trimEnd() === 'расширение программы' || item?.trimEnd() === 'персеверации');

        if (programMovementsProblems?.length >= 1) {
          this.programming = 'на уровне движений и действий'

         if (!this.regulationFromObj){
           this.regulationFromObj = '';
          }

        }
        let programMentalProblems = descriptionsFromNotBadSymptomsArr_flatted.filter(item => item?.trimEnd() == 'трудности построения алгоритма решения задачи'
          || item?.trimEnd() == 'не может построить фигуру самостоятельно по картинке, необходима организующая помощь');

        if (programMentalProblems?.length >= 1) {
          this.mentalProgramming = 'психической деятельности'

          if (!this.regulationFromObj){
            this.regulationFromObj = '';
          }
        }
        let programLogicProblems = descriptionsFromNotBadSymptomsArr_flatted.filter(item => item.trimEnd() === 'трудности переноса'
          || item.trimEnd() === 'исключает по ситуативному признаку');

        if (programLogicProblems.length >= 1) {
         this.logicProgramming = 'характеризуется недостаточностью в звене программировани психической деятельности'

        }
        let dinamicProblems = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'трудности переключения с одного движения на другое'
          || problem?.trimEnd() === 'с отрывом руки от листа'
          || problem?.trimEnd() === 'поочередное выполнение' || problem?.trimEnd() === 'выполнение с отставанием одной руки' || problem?.trimEnd() === 'трудности переключения с одной позы на другую');
        if (dinamicProblems?.length >= 1) {
          this.switchOfMovements = 'трудностями переключения'

        }
        let kineticProblemsMinus = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'персеверации' || problem?.trimEnd() === 'скандированность'
          || problem?.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
        if (kineticProblemsMinus?.length >= 1) {
          this.movementsDifficaltiesMinus = 'трудностями переключения'

        }
        let kineticProblemsPlus = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'лишние импульсы' || problem?.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
        if (kineticProblemsPlus?.length >= 1) {
          this.movementsDifficaltiesPlus = 'трудностями переключения'

        }

        let activateProblemsSlow = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'инактивность' || problem?.trimEnd() === 'аспонтанность'
        || problem?.trimEnd() === 'персеверации');
        if (activateProblemsSlow?.length >= 1) {
          this.mobility = 'инертностью психических процессов'
        }
        let controlProblems = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'эхопраксия' || problem?.trimEnd() === 'зеркальность'
          || problem?.trimEnd() === 'импульсивность' || problem?.trimEnd() === 'псевдоагнозии' || problem?.trimEnd() === 'конфабуляции');
        if (controlProblems?.length >= 1 && (this.regulationFromGeneral === '2')) {
          this.control = 'трудностями регуляции и контроля'

        //  if (!this.regulationFromObj){
        //    this.regulationFromObj = '';
        //  }
        }
        let activateProblemsMinus = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'истощаемость' || problem?.trimEnd() === 'повышенная отвлекаемость от заданий');
        if (activateProblemsMinus?.length >= 1) {
          this.minusMobility = 'истощаемостью'

        }
      }
    }

    //обработка значения объективной части  = 3 балла
    if ( this.objectiveBadSymptoms && this.objectiveBadSymptoms.length >0){

      let namesArray: any = this.objectiveBadSymptoms.flat(1).map(item => item.name);


      namesArray.forEach((name:string) => {
        const item: any = this.objectiveBadSymptoms.flat(1).find(item => item.name === name);
        if (item && (item.description || item.descriptionCopy || item.descriptionDrawingByInstruction || item.descriptionEval
        || item.descriptionDoing || item.descriptionDoingByInstruction)) {

          switch (name) {
            case 'dinamicPracsis' :
              if (item.descriptionSpeed){
                this.dinamic_pracsis_speed = item.descriptionSpeed.toString();
              }
              this.dinamic_pracsis = item.description.toString();
              /*    let sideLowSymptoms = this.dinamic_pracsis.split(',').filter(item => item.includes('неполное сжатие'));
                  if (sideLowSymptoms.length > 0){
                    dinamicLowProblemsArray_bad.push(sideLowSymptoms.toString())
                    console.log(dinamicLowProblemsArray_bad)
                  }
                  let sideStuckSymptomsToInclude = ['скандированность', 'персеверации', 'трудности переключения с одного движения на другое']
                   let sideStuckSymptoms = this.dinamic_pracsis.split(',').filter(item => item.includes(sideStuckSymptomsToInclude.toString()));
                   if (sideStuckSymptoms.length >0){
                     dinamicStuckProblems_bad.push(sideStuckSymptoms.toString())
                     console.log(dinamicStuckProblems_bad)
                   }
                   let sideProgramSymptomsToInclude = ['расширение программы','упрощение программы']
                   let program = this.dinamic_pracsis.split(',').filter(item => item.includes(sideProgramSymptomsToInclude.toString()));
                   if (program.length >0){
                     programmingActionsProblems_bad.push(program);
                     console.log(programmingActionsProblems_bad)
                   }
                //   let dinamic_pracsis = item.description.toString();
                 //  let remove = 'персеверации';
                //   this.dinamic_pracsis = dinamic_pracsis.split(remove)*/
              break;
            case 'reciproknaya':
              this.reciprok = item.description.toString();
              break;
            case  'positionsPracsis':
              this.position_pracsis = item.description.toString();
              break;
            case  'positionsOralPracsis':
              this.oral_pracsis = item.description.toString();
              break;
            case 'grafics':
              this.grafics_pracsis = item.description.toString();
              break;
            case 'hed':
              this.heads_test = item.description.toString();
              break;
            case 'ears_motors':
              if (item.descriptionEval != ''){
                this.listen_motor_test_eval = item.descriptionEval.toString();
              }
              if (item.descriptionDoing){
                this.listen_motor_test = item.descriptionDoing.toString();
              }
              if (item.descriptionDoingByInstruction){
                this.listen_motor_test_instruction = item.descriptionDoingByInstruction.toString();
              }
              break;
            case 'eyes':
              this.eyes_test = item.description.toString();
              break;
            case 'constructor':
              this.constract_pracsis = item.description.toString();
              break;
            case 'choise_reaction':
              this.choice_reaction = item.description.toString();
              break;
            case 'copy_kube':
              if (item.descriptionDrawingByInstruction){
                this.kube_draw = item.descriptionDrawingByInstruction.toString()
              }
              if (item.descriptionCopy){
                this.kube_copy = item.descriptionCopy.toString();
              }
              break;
            case 'vision gnosis':
              this.visiual_gnosis = item.description.toString();
              break;
            case 'vision_space gnosis':
              this.visiual_space_gnosis = item.description.toString();
              break;
            case 'vision_symbolic gnosis':
              this.visiual_symbolic_gnosis = item.description.toString();
              break;
            case 'auditory gnosis':
              this.auditional_gnosis = item.description.toString();
              break;
            case 'sensor gnosis':
              this.sensor_gnosis = item.description.toString();
              break;
            case 'emotional gnosis':
              this.emotional_gnosis = item.description.toString();
              break;
            case 'copy gnosis':
              this.copy_gnosis = item.description.toString();
              break;
            case 'copy_simple gnosis':
              this.copy_simple_gnosis = item.description.toString();
              break;
            case 'vision_space_memory':
              this.visial_space_memory = 'При исследовании зрительной памяти отмечается ' + item.description.toString();
              break;
            case 'vision_memory':
              this.visiual_memory = 'В пробе 2/3 отмечаются ' + item.description.toString();
              break;
            case 'audit_memory':
              this.audit_memory = 'При исследовании слухоречевой памяти отмечаются ' + item.description.toString();
              break;
            case 'audit_memory_2_3':
              this.audit_memory_2_3 = 'При исследовании слухоречевой памяти в пробе "2 по 3" отмечаются ' + item.description.toString();
              break;
            case 'serial counting':
              this.calculating = item.description.toString();
              let calculating = item.description.toString();

              let removefromcalculating = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let removePsyMoveFromcalculating = ['персеверации'];
              let removeControlFromcalculating = ['импульсивность'];
              let removeDinamicFromcalculating = ['флуктуации'];
              /*  this.calculating = calculating
                  .split(/,+/)
                  .filter((word:string) => !removefromcalculating.includes(word))
                  .join(' ');*/
              let control_in_calculating = calculating.split(/,+/).filter((word:string) => removeControlFromcalculating.includes(word)).join(' ');
              if (control_in_calculating && (this.regulationFromGeneral === '3')){
                this.control = 'выраженными трудностями регуляции и контроля';
              }
              let psymove_in_calculating = calculating.split(/,+/).filter((word:string) => removePsyMoveFromcalculating.includes(word)).join(' ');
              if (psymove_in_calculating){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_calculating = calculating.split(/,+/).filter((word:string) => removeDinamicFromcalculating.includes(word)).join(' ');
              if (dinamic_in_calculating){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving tasks':
              this.solving_tasks = item.description.toString();
              let solving_tasks = item.description.toString();
              let removefromsolving_tasks = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let removePsyMoveFromsolving_tasks = ['персеверации'];
              let removeControlFromsolving_tasks = ['импульсивность'];
              let removeDinamicFromsolving_tasks = ['флуктуации'];
              /*    this.solving_tasks = solving_tasks
                    .split(/,+/)
                    .filter((word:string) => !removefromsolving_tasks.includes(word))
                    .join(' ');*/
              let control_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeControlFromsolving_tasks.includes(word)).join(' ');
              if (control_in_solving_tasks && (this.regulationFromGeneral === '3')){
                this.control = 'выраженными трудностями регуляции и контроля';
              }
              let psymove_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removePsyMoveFromsolving_tasks.includes(word)).join(' ');
              if (psymove_in_solving_tasks){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeDinamicFromsolving_tasks.includes(word)).join(' ');
              if (dinamic_in_solving_tasks){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving problems':
              this.solving_problems = item.description.toString();
              let solving_problems = item.description.toString();
              let remove_problems = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let removePsyMove = ['персеверации'];
              let removeControl = ['импульсивность'];
              let removeDinamic = ['флуктуации'];
              /* this.solving_problems = solving_problems
                 .split(/,+/)
                 .filter((word:string) => !remove_problems.includes(word))
                 .join(' ');*/
              let control_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeControl.includes(word)).join(' ');
              if (control_in_solving_problems && (this.regulationFromGeneral === '3')){
                this.control = 'выраженными трудностями регуляции и контроля';
              }
              let psymove_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removePsyMove.includes(word)).join(' ');
              if (psymove_in_solving_problems){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeDinamic.includes(word)).join(' ');
              if (dinamic_in_solving_problems){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving analog':
              this.analog = item.description.toString();
              let analog = item.description.toString();
              let removefromAnalog = ["флуктуации", "аспонтанность","импульсивность", "персеверации"];
              let removePsyMoveFromAnalog = ['персеверации'];
              let removeControlFromAnalog = ['импульсивность'];
              let removeDinamicFromAnalog = ['флуктуации'];
              /* this.analog =  analog
                 .split(/,+/)
                 .filter((word:string) => !removefromAnalog.includes(word))
                 .join(' ');*/
              let control_in_analog = analog.split(/,+/).filter((word:string) => removeControlFromAnalog.includes(word)).join(' ');
              if (control_in_analog && (this.regulationFromGeneral === '3')){
                this.control = 'выраженными трудностями регуляции и контроля';
              }
              let psymove_in_analog = analog.split(/,+/).filter((word:string) => removePsyMoveFromAnalog.includes(word)).join(' ');
              if (psymove_in_analog){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_analog = analog.split(/,+/).filter((word:string) => removeDinamicFromAnalog.includes(word)).join(' ');
              if (dinamic_in_analog){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving exclude':
              this.exclude_4 = item.description.toString();
              let exclude_4 = item.description.toString();
              let remove2 = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let rmcontrolfromex = ["импульсивность"];
              let rmMoveFromEx = ["персеверации"];
              let rmDinamicFromEx = ["флуктуации"];
            /* this.exclude_4 = exclude_4
               .split(/,+/)
               .filter((word:string) => !remove2.includes(word))
               .join(' ');*/
              let controlProblems = exclude_4.split(/,+/).filter((word:string) => rmcontrolfromex.includes(word)).join(' ');
              if (controlProblems && (this.regulationFromGeneral === '3')){
                this.control = 'выраженными трудностями регуляции и контроля';
              }
              let move_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmMoveFromEx.includes(word)).join(' ');
              if (move_in_exclude_4){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmDinamicFromEx.includes(word)).join(' ');
              if (dinamic_in_exclude_4){
                this.sinus = 'флуктуациями';
              }
              break;
            case  'understanding':
              this.text_meaning = 'Понимание прочитанного текста  доступно  при массированной помощи';
              break;
            case  'understanding serial pictures':
              this.causal_link = 'Причинно-следственные связи устанавливает с массированной помощью';
              break;
            case 'understanding pictures':
              this.pictures_understanding = 'доступно  при массированной помощи';
              break;
            case  'understanding proverbs':
              this.proverbs = 'доступно  при массированной помощи';
              break;
            case  'attention':
              this.attention = item.description.toString();
              break;
            default:
              break;
          }
        }
      });
    }

    //обработка данных 3 балла
    if (this.objectiveBadSymptoms && this.objectiveBadSymptoms.length >0) {
      let descriptionsFromBadSymptomsArr = this.objectiveBadSymptoms.flat(1).map(item => item.description)

      let descriptionsFromBadSymptomsArr_flatted = descriptionsFromBadSymptomsArr.flat(1)

      if (descriptionsFromBadSymptomsArr_flatted.length > 0) {
        //функции программирования и контроля, серийная организация движений и действий
        let dinamicLowProblemsArray_bad = [];
        let dinamicStuckProblems_bad = [];
        let programmingActionsProblems_bad = [];

        let ram = descriptionsFromBadSymptomsArr_flatted.filter(item => item?.trimEnd() === 'трудности удержания промежуточного результата'
          || item?.trimEnd() === 'контаминации обеих групп' ||
          item?.trimEnd() === 'ошибки в единицах');

        if (ram?.length >= 1) {
          this.ram_value = 'характеризуется недостаточностью оперативной памяти'

        }


        let programMovementsProblems = descriptionsFromBadSymptomsArr_flatted.filter(item => item?.trimEnd() === 'упрощение программы'
          || item?.trimEnd() === 'расширение программы');

        if (programMovementsProblems?.length >= 1) {
          this.programming2 = 'на уровне движений и действий'

          if (!this.regulationFromObj){
            this.regulationFromObj = '';
          }
        }
        let programMentalProblems = descriptionsFromBadSymptomsArr_flatted.filter(item => item?.trimEnd() === 'трудности построения алгоритма решения задачи'
          || item?.trimEnd() === 'не может построить фигуру самостоятельно по картинке, необходима организующая помощь');

        if (programMentalProblems?.length >= 1) {
          programmingActionsProblems_bad.push(programMentalProblems.toString())
        }
       // let programLogicProblems = descriptionsFromBadSymptomsArr_flatted.filter(item => item.trimEnd() === 'трудности переноса' || item.trimEnd() === 'исключает по ситуативному признаку');
       // console.log(programLogicProblems);
        //if (programLogicProblems.length >= 1) {
       //   programmingActionsProblems_bad.push(programLogicProblems.toString())
       // }
        if (programmingActionsProblems_bad?.length >= 1) {
          this.mentalProgramming2 = 'на уровне программирования психической деятельности';
          if (!this.regulationFromObj){
            this.regulationFromObj = '';
          }
        }


        //  this.logicProgramming = 'характеризуется недостаточностью в звене программировани психической деятельности'

        let dinamicProblems = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem?.trim() === 'трудности переключения с одного движения на другое'
          || problem?.trim() === 'с отрывом руки от листа'
          || problem?.trim() === 'поочередное выполнение' || problem?.trim() === 'выполнение с отставанием одной руки'
          || problem?.trim() === 'трудности переключения с одной позы на другую' || problem?.trim() === 'выполнение в медленном темпе'
          || problem?.trim() === 'напряжение во всем теле при выполнении пробы'
          || problem?.trim() === 'компенсаторное разнесение элементов программы в пространстве');
        if (dinamicProblems?.length >= 1) {
          dinamicStuckProblems_bad.push(dinamicProblems.toString())
        }
        let kineticProblemsMinus = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'персеверации'
          || problem?.trimEnd() === 'скандированность'
          || problem?.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
        if (kineticProblemsMinus?.length >= 1) {
          dinamicStuckProblems_bad.push(kineticProblemsMinus.toString())
            this.movementsDifficaltiesMinus = 'трудностями переключения'

        }
        let kineticProblemsPlus = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'лишние импульсы'
          || problem?.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
        if (kineticProblemsPlus?.length >= 1) {
          dinamicStuckProblems_bad.push(kineticProblemsPlus.toString())
           this.movementsDifficaltiesPlus = 'трудностями переключения'

        }
        if (dinamicStuckProblems_bad?.length >= 1) {
          this.switchOfMovements = 'трудностями переключения'
        }

        let activateProblemsSlow = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'инактивность'
          || problem?.trimEnd() === 'аспонтанность' || problem?.trimEnd() === 'инертность');
        if (activateProblemsSlow?.length >= 1) {
          this.mobility = 'выраженной инертностью психических процессов'
        }
        let controlProblems = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'эхопраксия'
          || problem?.trimEnd() === 'зеркальность' || problem?.trimEnd() === 'импульсивность'
          || problem?.trimEnd() === 'псевдоагнозии' || problem?.trimEnd() === 'конфабуляции');
        if (controlProblems?.length >= 1 && (this.regulationFromGeneral === '3') && !this.control) {
          this.control = 'выраженными трудностями регуляции и контроля'

          if (!this.regulationFromObj){
            this.regulationFromObj = '';
          }
        }
        //нейродинамика

        let activateProblemsMinus = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'истощаемость');
        if (activateProblemsMinus?.length >= 1) {
          dinamicLowProblemsArray_bad.push(activateProblemsMinus.toString())
          this.minusMobility2 = 'истощаемостью'
          //console.log( this.minusMobility)
        }
        let sinusProblems = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'флуктуации')
        if (sinusProblems?.length >= 1) {
          dinamicLowProblemsArray_bad.push(sinusProblems.toString())
          this.sinus2 = 'флуктуациями'
        }
      }

    }

    //обработка значений объективной части = 4 балла
    if (this.objectiveWorseSymptoms && this.objectiveWorseSymptoms.length >0){
      let namesArray2: any = this.objectiveWorseSymptoms.flat(1).map(item => item.name);
      namesArray2.forEach((name:string) => {
        const item: any = this.objectiveWorseSymptoms.flat(1).find(item => item.name === name);
        if (item && (item.description || item.descriptionCopy || item.descriptionDrawingByInstruction || item.descriptionEval
          || item.descriptionDoing || item.descriptionDoingByInstruction)) {
          switch (name) {
            case 'dinamicPracsis':
              if (item.descriptionSpeed){
                this.dinamic_pracsis_speed = item.descriptionSpeed.toString();
              }
              this.dinamic_pracsis = item.description.toString();
              break;
            case 'reciproknaya':
              this.reciprok = item.description.toString();
              break;
            case  'positionsPracsis':
              this.position_pracsis = item.description.toString();
              break;
            case  'positionsOralPracsis':
              this.oral_pracsis = item.description.toString();
              break;
            case 'grafics':
              this.grafics_pracsis = item.description.toString();
              break;
            case 'hed':
              if (item.description.length <=0){
                this.heads_test_worse = 'Выполнение пробы недоступно'
              } else {
                this.heads_test = item.description.toString();
              }
              break;
            case 'ears_motors':
              if (item.descriptionEval.length > 0 ){
                this.listen_motor_test_eval = item.descriptionEval.toString();
              } else {
                this.listen_motor_test_worse = 'Выполнение пробы на слухомоторные координации недоступно'
              }
              if (item.descriptionDoing){
                this.listen_motor_test = item.descriptionDoing.toString();
              }
              if (item.descriptionDoingByInstruction){
                this.listen_motor_test_instruction = item.descriptionDoingByInstruction.toString();
              }
              break;
            case 'eyes':
              this.eyes_test = item.description.toString();
              break;
            case 'constructor':
              this.constract_pracsis = item.description.toString();
              break;
            case 'choise_reaction':
              this.choice_reaction = item.description.toString();
              break;
            case 'copy_kube':
              if (item.descriptionDrawingByInstruction.length <=0 && item.descriptionCopy.length <=0){
                this.kube_copy_worse = 'Рисование и копирование стола/куба недоступно'
              }
              if (item.descriptionDrawingByInstruction){
                this.kube_draw = item.descriptionDrawingByInstruction.toString()
              }
              if (item.descriptionCopy){
                this.kube_copy = item.descriptionCopy.toString();
              }
              break;
            case 'vision gnosis':
              this.visiual_gnosis = item.description.toString();
              break;
            case 'vision_space gnosis':
              this.visiual_space_gnosis = item.description.toString();
              break;
            case 'vision_symbolic gnosis':
              this.visiual_symbolic_gnosis = item.description.toString();
              break;
            case 'auditory gnosis':
              this.auditional_gnosis = item.description.toString();
              break;
            case 'sensor gnosis':
              this.sensor_gnosis = item.description.toString();
              break;
            case 'emotional gnosis':
              this.emotional_gnosis = item.description.toString();
              break;
            case 'copy gnosis':
              if (item.description.length <=0){
                this.copy_gnosis_worse = 'Выполнение пробы недоступно'
              } else {
                this.copy_gnosis = item.description.toString();
              }
              break;
            case 'copy_simple gnosis':
              if (item.description.length <=0){
                this.copy_simple_gnosis_worse = 'Выполнение пробы недоступно'
              } else {
                this.copy_simple_gnosis = item.description.toString();
              }
              break;
            case 'vision_space_memory':
              this.visial_space_memory = 'При исследовании зрительной памяти отмечается ' + item.description.toString();
              break;
            case 'vision_memory':
              this.visiual_memory = 'В пробе 2/3 отмечаются ' + item.description.toString();
              break;
            case 'audit_memory':
              this.audit_memory = 'При исследовании слухоречевой памяти отмечаются ' + item.description.toString();
              break;
            case 'audit_memory_2_3':
              this.audit_memory_2_3 = 'При исследовании слухоречевой памяти в пробе "2 по 3" отмечаются ' + item.description.toString();
              break;
            case 'serial counting':
              this.calculating = item.description.toString();
              let calculating = item.description.toString();

              let removefromcalculating = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let removePsyMoveFromcalculating = ['персеверации'];
              let removeControlFromcalculating = ['импульсивность'];
              let removeDinamicFromcalculating = ['флуктуации'];
              /*  this.calculating = calculating
                  .split(/,+/)
                  .filter((word:string) => !removefromcalculating.includes(word))
                  .join(' ');*/
              let control_in_calculating = calculating.split(/,+/).filter((word:string) => removeControlFromcalculating.includes(word)).join(' ');
              if (control_in_calculating && (this.regulationFromGeneral === '4')){
                this.control = 'грубыми нарушениями регуляции и контроля';
              }
              let psymove_in_calculating = calculating.split(/,+/).filter((word:string) => removePsyMoveFromcalculating.includes(word)).join(' ');
              if (psymove_in_calculating){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_calculating = calculating.split(/,+/).filter((word:string) => removeDinamicFromcalculating.includes(word)).join(' ');
              if (dinamic_in_calculating){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving tasks':
              this.solving_tasks = item.description.toString();
              let solving_tasks = item.description.toString();
              let removefromsolving_tasks = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let removePsyMoveFromsolving_tasks = ['персеверации'];
              let removeControlFromsolving_tasks = ['импульсивность'];
              let removeDinamicFromsolving_tasks = ['флуктуации'];
              /*    this.solving_tasks = solving_tasks
                    .split(/,+/)
                    .filter((word:string) => !removefromsolving_tasks.includes(word))
                    .join(' ');*/
              let control_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeControlFromsolving_tasks.includes(word)).join(' ');
              if (control_in_solving_tasks && (this.regulationFromGeneral === '4')){
                this.control = 'грубыми нарушениями регуляции и контроля';
              }
              let psymove_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removePsyMoveFromsolving_tasks.includes(word)).join(' ');
              if (psymove_in_solving_tasks){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeDinamicFromsolving_tasks.includes(word)).join(' ');
              if (dinamic_in_solving_tasks){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving problems':
              this.solving_problems = item.description.toString();
              let solving_problems = item.description.toString();
              let remove_problems = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let removePsyMove = ['персеверации'];
              let removeControl = ['импульсивность'];
              let removeDinamic = ['флуктуации'];
              /* this.solving_problems = solving_problems
                 .split(/,+/)
                 .filter((word:string) => !remove_problems.includes(word))
                 .join(' ');*/
              let control_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeControl.includes(word)).join(' ');
              if (control_in_solving_problems && (this.regulationFromGeneral === '4')){
                this.control = 'грубыми нарушениями регуляции и контроля';
              }
              let psymove_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removePsyMove.includes(word)).join(' ');
              if (psymove_in_solving_problems){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeDinamic.includes(word)).join(' ');
              if (dinamic_in_solving_problems){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving analog':
              this.analog = item.description.toString();
              let analog = item.description.toString();
              let removefromAnalog = ["флуктуации", "аспонтанность","импульсивность", "персеверации"];
              let removePsyMoveFromAnalog = ['персеверации'];
              let removeControlFromAnalog = ['импульсивность'];
              let removeDinamicFromAnalog = ['флуктуации'];
              /* this.analog =  analog
                 .split(/,+/)
                 .filter((word:string) => !removefromAnalog.includes(word))
                 .join(' ');*/
              let control_in_analog = analog.split(/,+/).filter((word:string) => removeControlFromAnalog.includes(word)).join(' ');
              if (control_in_analog && (this.regulationFromGeneral === '4')){
                this.control = 'грубыми нарушениями регуляции и контроля';
              }
              let psymove_in_analog = analog.split(/,+/).filter((word:string) => removePsyMoveFromAnalog.includes(word)).join(' ');
              if (psymove_in_analog){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_analog = analog.split(/,+/).filter((word:string) => removeDinamicFromAnalog.includes(word)).join(' ');
              if (dinamic_in_analog){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving exclude':
              this.exclude_4 = item.description.toString();
              let exclude_4 = item.description.toString();
              let remove2 = ["флуктуации","аспонтанность","импульсивность","персеверации"];
              let rmcontrolfromex = ["импульсивность"];
              let rmMoveFromEx = ["персеверации"];
              let rmDinamicFromEx = ["флуктуации"];
              /* this.exclude_4 = exclude_4
                 .split(/,+/)
                 .filter((word:string) => !remove2.includes(word))
                 .join(' ');*/
              let controlProblems = exclude_4.split(/,+/).filter((word:string) => rmcontrolfromex.includes(word)).join(' ');
              if (controlProblems && (this.regulationFromGeneral === '4')){
                this.control = 'грубыми нарушениями регуляции и контроля';
              }
              let move_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmMoveFromEx.includes(word)).join(' ');
              if (move_in_exclude_4){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmDinamicFromEx.includes(word)).join(' ');
              if (dinamic_in_exclude_4){
                this.sinus = 'флуктуациями';
              }
              break;
            case  'understanding':
              this.text_meaning = 'Понимание прочитанного текста не доступно даже при массированной помощи';
              break;
            case  'understanding serial pictures':
              this.causal_link = 'Имеет выраженные трудности при установлении причинно-следственных связей';
              break;
            case 'understanding pictures':
              this.pictures_understanding = 'недоступно даже с массированной помощью';
              break;
            case  'understanding proverbs':
              this.proverbs = 'недоступно даже с массированной помощью';
              break;
            case  'attention':
              this.attention = item.description.toString();
              break;
            default:
              break;
          }
        }
      });
    }

    //обработка данных 4 балла
    if (this.objectiveWorseSymptoms && this.objectiveWorseSymptoms.length > 0){
      let descriptionsFromWorseSymptomsArr = this.objectiveWorseSymptoms.flat(1).map(item => item.description)

      //добавить обработку оштбок на случай отсутствия данных
      let descriptionsFromWorseSymptomsArr_flatted = descriptionsFromWorseSymptomsArr.flat(1)

      if (descriptionsFromWorseSymptomsArr_flatted.length > 0) {
        let programProblems = descriptionsFromWorseSymptomsArr_flatted.filter(item => item?.trimEnd() === 'упрощение программы'
          || item?.trimEnd() === 'расширение программы'
          || item?.trimEnd() === 'эхопраксия' || item?.trimEnd() === 'трудности построения алгоритма решения задачи' ||
          item?.trimEnd() === 'не может построить фигуру самостоятельно по картинке, необходима организующая помощь'
          || item?.trimEnd() === 'ошибки в единицах' || item?.trimEnd() === 'трудности переноса' || item?.trimEnd() === 'исключает по ситуативному признаку');

        if (programProblems?.length >= 1) {
          this.programming3 = 'характеризуется грубой недостаточностью в звене программировани психической деятельности'

          if (!this.regulationFromObj){
            this.regulationFromObj = '';
          }
        }
        let dinamicProblems = descriptionsFromWorseSymptomsArr_flatted.filter((problem: string) => problem === 'персеверации'
          || problem === 'трудности переключения с одного движения на другое' || problem === 'скандированность' || problem === 'с отрывом руки от листа'
          || problem === 'поочередное выполнение' || problem === 'выполнение с отсаванием одной руки'
          || problem === 'трудности переключения с одной позы на другую' || problem === 'трудности воспроизведения акцентированных ритмов');
        if (dinamicProblems?.length >= 1) {
          this.switchOfMovements3 = 'грубыми трудностями переключения'

        }
        let activateProblems = descriptionsFromWorseSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'инактивность'
          || problem?.trimEnd() === 'аспонтанность');
        if (activateProblems?.length >= 1) {
          this.mobility3 = 'грубой инертностью психических процессов'

        }
        let controlProblems = descriptionsFromWorseSymptomsArr_flatted.filter((problem: string) => problem?.trimEnd() === 'эхопраксия'
          || problem?.trimEnd() === 'зеркальность'
          || problem?.trimEnd() === 'импульсивность' || problem?.trimEnd() === 'лишние импульсы' || problem?.trimEnd() === 'псевдоагнозии'
          || problem?.trimEnd() === 'контаминации обеих групп'
          || problem?.trimEnd() === 'конфабуляции');
        if (controlProblems?.length >= 1) {
          this.control3 = 'грубыми нарушениями контроля'

          if (!this.regulationFromObj){
            this.regulationFromObj = '';
          }
        }
      }
    }
//посмотреть почему не записывает дескрипшн
}
  saveSolutions(resume: string, recommends: string): void {
      this.resume = resume;
      this.recommends = recommends;
      this.isRefresh = true;
      this.router.navigate(['raport'])
      this.solution =
        { dateOfDiagnostic: this.examinationDate,
          nameOfClient: this.nameOfUser,
          dateOfBirth: this.birthdayOfUser,
          presolution:
            [this.complaints,this.med_anamnesis,this.soc_anamnesis],
          perfomance: [
            this.adequancy, this.adequancyDescription, this.contact, this.conversation, this.entranceDescription, this.speechInitiation,
            this.distance, this.orientation, this.orientationDescription, this.expert_motivation, this.interest, this.emotional_state,
            this.emotional_stateDescription, this.criticality, this.instructionUnderstanding, this.tasks, this.helpDescription,
            this.helpAccepting, this.workTempo, this.workDinamic
          ],

          gnosis: [this.visiual_gnosis, this.visiual_symbolic_gnosis, this.copy_gnosis,this.copy_simple_gnosis, this.emotional_gnosis, this.auditional_gnosis,this.sensor_gnosis],
          pracsis: [this.dinamic_pracsis,this.reciprok,this.position_pracsis, this.oral_pracsis,this.choice_reaction, this.grafics_pracsis, this.constract_pracsis, this.eyes_test, this.heads_test, this.kube_copy],
          memory: [this.audit_memory, this.memoryPoints, this.audit_memory_2_3, this.visial_space_memory,this.visiual_memory, ],
          calculating: [this.calculating],
          thinking: [this.causal_link,this.solving_problems, this.exclude_4, this.pictures_understanding, this.text_meaning],
          speech: this.speech,
          dinamic: [this.mobility,this.minusMobility2, this.sinus,this.sinus2, this.regulationFromObj,this.regulationFromGeneral,this.shultePoints,this.attention],
          regulation: [this.programming,this.mentalProgramming, this.control, ],
          resume: this.resume,
          recommendation:this.recommends,
        }
    console.log(this.solution)//объект пустой
   // let solutionForSend = JSON.stringify(this.solution)
   // localStorage.setItem('fullSolution', solutionForSend)
   // console.log(solutionForSend)
    //создать объект solution по модели и записать в него данные

  }

  saveAndSendRequestToDB(){
    let solutionForSend = JSON.stringify(this.solution)
    localStorage.setItem('fullSolution', solutionForSend)
    console.log(solutionForSend)
    if (this.nameOfUser){
      this.reportService.saveReport(this.nameOfUser,this.userId, solutionForSend)
        .subscribe({
          next: data => {
            console.log(' Ответ сервера:', data);
            if (!data) {
              alert('Не удалось сохранить протокол');
            }
          },
          error: error => {
            console.error(' Ошибка запроса:', error);
            alert('Ошибка при сохранении данных');
          }
        });
      /*  .subscribe(data => { //эта часть функции не работает.
          console.log(data)
          if (!data){
            //throw new Error("Данные не удалось записать")
            alert('Не удалось сохранить протокол');
          }
        });*/
      console.log("Success");
      //  this.router.navigate(['main']);
    }

  }
  exportPdf(): void {
    this.exportBtn.nativeElement.classList.add('hide-for-pdf');
  //  this.exportBtn2.nativeElement.classList.add('hide-for-pdf');

    const options = {
      margin:[30,30,10,10],
      filename: 'export.pdf',
      image: {
        type: 'jpeg',
        quality: 1
      },
      html2canvas: {
        scale: 1.5
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    } as const;

    setTimeout(() => {
      html2pdf()
        .from(this.content.nativeElement)
        .save()
        .finally(() => {
          // 🔥 возвращаем обратно
          this.exportBtn.nativeElement.classList.remove('hide-for-pdf');
        //  this.exportBtn2.nativeElement.classList.remove('hide-for-pdf');
        });
    });
  }

 // restucturisingArraysWithPoints( key,array:[]):void{
   // let point = array.map(item:number => item.point)

  //}
  }




