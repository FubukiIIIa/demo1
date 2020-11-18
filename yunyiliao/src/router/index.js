import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
//医生管理系统
import Doctor from '@/components/doctor/Doctor'
//我的病人
import MyPatient from '@/components/doctor/MyPatient'
//页码组件
import Pagenation from '@/components/doctor/Pagenation'
//电子病历列表详情
import EMedicalListDetail from '@/components/doctor/EMedicalListDetail'
//电子病历详情
import EMedicalDetail from '@/components/doctor/EMedicalDetail'
//电子病历
import EMedicalRecord from '@/components/doctor/EMedicalRecord'
//添加病例
import AddMedical from '@/components/doctor/AddMedical'
//住院管理
import HospitalizationManagement from '@/components/doctor/HospitalizationManagement'
//添加病人
import AddPatient from '@/components/doctor/AddPatient'
//报告查询
import ReportQuery from '@/components/doctor/ReportQuery'
//报告详情
import ReportDetail from '@/components/doctor/ReportDetail'
//添加报告
import AddReport from '@/components/doctor/AddReport'
//出院管理
import DischargeManagement from '@/components/doctor/DischargeManagement'
//出院打印
import DischargePrint from '@/components/doctor/DischargePrint'
//处方管理
import PrescriptionManagement from '@/components/doctor/PrescriptionManagement'
//就诊咨询
import DoctorConsultation from '@/components/doctor/DoctorConsultation'
//个人信息
import PersonalInformation from '@/components/doctor/PersonalInformation'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
	{//医生管理系统
		path: '/Doctor',
		component: Doctor,
		children:[
			{//我的病人
				path: '/',
				component: MyPatient,
				children:[
					{path:'/',component:Pagenation}
				]
			},
			{//电子病历列表详情
				path: '/EMedicalListDetail',
				component: EMedicalListDetail
			},
			{//电子病历详情
				path: '/EMedicalDetail',
				name:'EMedicalDetail',
				component: EMedicalDetail
			},
			{//电子病历
				path: '/EMedicalRecord',
				component: EMedicalRecord,
				children:[
					{path:'/',component:Pagenation}
				]
			},
			{//添加病例
				path: '/AddMedical',
				name:'AddMedical',
				component: AddMedical
			},
			{//住院管理
				path: '/HospitalizationManagement',
				component: HospitalizationManagement,
				children:[
					{path:'/',component:Pagenation}
				]
			},
			{//添加病人
				path: '/AddPatient',
				name:'AddPatient',
				component: AddPatient
			},
			{//报告查询
				path: '/ReportQuery',
				component: ReportQuery,
				children:[
					{path:'/',component:Pagenation}
				]
			},
			{//报告详情
				path: '/ReportDetail',
				name:'ReportDetail',
				component: ReportDetail
			},
			{//添加报告
				path: '/AddReport',
				name:'AddReport',
				component: AddReport
			},
			{//出院管理
				path: '/DischargeManagement',
				component: DischargeManagement,
				children:[
					{path:'/',component:Pagenation}
				]
			},
			{//出院打印
				path: '/DischargePrint',
				name:'DischargePrint',
				component: DischargePrint
			},
			{//处方管理
				path: '/PrescriptionManagement',
				component: PrescriptionManagement,
				children:[
					{path:'/',component:Pagenation}
				]
			},
			{//就诊咨询
				path: '/DoctorConsultation',
				component: DoctorConsultation,
				children:[
					{path:'/',component:Pagenation}
				]
			},
			{//个人信息
				path: '/PersonalInformation',
				component: PersonalInformation,
				children:[
					{path:'/',component:Pagenation}
				]
			}
			
		]
	}
  ]
})
