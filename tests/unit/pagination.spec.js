import { mount } from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'

describe("Pagination.vue", () => {
    it("emit 'count' event with correct payload", async () => {

        const wrapper = mount(Pagination)
    
        // trigger the emit
        await wrapper.find('span').trigger('click')
    
        expect(wrapper.emitted())
       })
    
   
})