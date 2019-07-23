import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import {BurgerBuilder} from './BurgerBuilder';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

describe('<BurgerBuilder>', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
        })

        it('should render <BurgerControls /> when receiving ingredients', () => {
            wrapper.setProps({ ings: { salad: 0 } });
            expect(wrapper.find(BurgerControls)).toHaveLength(1);
        });
});