const { shallow } = require("enzyme");
import { GifsGridItem } from '../components/GifsGridItem';


describe('Componente gif', () => {
    const titel="Gif N";
    const url="../ruta/img.jpg";
    test('Render de comoponete', () => {
        let wrapper = shallow(<GifsGridItem url={url} titel={titel} />);
        expect(wrapper).toMatchSnapshot();

    })

})
