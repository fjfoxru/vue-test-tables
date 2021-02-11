import {generateFakeData} from '@/testData.js';

export default {
    namespaced: true,
    state: {
        firstTableData: null,
        secondTableData: null,
    },
    mutations: {
        ['ADD_DATA_FIRST_TABLE'](state, payload) {
            state.firstTableData = payload;
        },
        ['ADD_DATA_SECOND_TABLE'](state, payload) {
            state.secondTableData = payload;
        }, 
        ['CHANGE_DATA_FIRST_TABLE'](state, payload) {
            // Вот так вообще не делаю никогда. Обычно отправляю запрос на сохранение на сервак, а потом фетчу обновленные данные
            const indexItemToChange = state.firstTableData.findIndex(el => el.id === payload.itemId);
            const indexElementToChange = state.firstTableData[indexItemToChange].data.findIndex(el => el.id === payload.elementId);
            const toChange = state.firstTableData[indexItemToChange].data[indexElementToChange];
            toChange.value = payload.newValue;
        }, 
    },
    actions: {
        // Как будто бы данные с сервера получаем, причем только тогда, когда их нет.
        async fetchDataForFirstTable({commit, getters}) {
            if (!getters.get_first_table_data) {
                const hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
                const fakeDataForTable1 = await generateFakeData(hours, 'hour', 30);
                commit('ADD_DATA_FIRST_TABLE', fakeDataForTable1);
            } else {
                console.log('Данные и так загружены');
            }
        },
        async fetchDataForSecondTable({commit, getters}) {
            if (!getters.get_second_table_data) {
                const days = ['1 февраля', '2 февраля', '3 февраля', '4 февраля', '5 февраля', '6 февраля', '7 февраля', '8 февраля', '9 февраля', '10 февраля', '11 февраля', '12 февраля', '13 февраля', '14 февраля', '15 февраля', '16 февраля', '17 февраля', '18 февраля', '19 февраля', '20 февраля', '21 февраля', '22 февраля', '23 февраля', '24 февраля', '25 февраля', '26 февраля', '27 февраля', '28 февраля'];
                const fakeDataForTable2 = await generateFakeData(days, 'day', 25);
                commit('ADD_DATA_SECOND_TABLE', fakeDataForTable2);
            } else {
                console.log('Данные и так загружены');
            }
        },


        changeDataForFirstTable({commit}, payload) {
            commit('CHANGE_DATA_FIRST_TABLE', payload);
        }
    },
    getters: {
        get_first_table_data(state) {
            return state.firstTableData;
        },
        get_second_table_data(state) {
            return state.secondTableData;
        },
    }
}