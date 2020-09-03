// STORE //////////////////////////////////////////////////// STORE ///////////////
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
	state() {
		return {
			matList: [],
			currentType: {
				baseDepth: 1,
				baseType: 1.1,
				baseTypeString: "",
				pillarType: 1.2,
				pillarTypeString: "",
				coverType: 1.2,
				coverTypeString: "",
				fenceHeight: 1.8, 
				overallLength: 34,
				pillarsNum: 12,
			},
		}
	},
	mutations: {
		setDepth(state, val) {
			state.currentType.baseDepth = val
		},

		setBaseType: (state, arr) => {
			state.currentType.baseType = arr[0];
			state.currentType.baseTypeString = arr[1];
		},
		setPillarType: (state, arr) => {
			state.currentType.pillarType = arr[0];
			state.currentType.pillarTypeString = arr[1];

		},
		setCoverType: (state, arr) => {
			state.currentType.coverType = arr[0];
			state.currentType.coverTypeString = arr[1];
		},
		setHeight: (state, val) => {
			if (!isNaN(val)) {
				(val < 20) ?
					state.currentType.fenceHeight = val :
					state.currentType.fenceHeight = 3.5
			}
		},
		setOverallLength: (state, val) => {
			state.currentType.overallLength = val
		},
		setPillarsNum: (state, val) => {
			state.currentType.pillarsNum = val
		},
		setMaterialList: (state, arr) => {
			state.matList = arr
		}
	}
}