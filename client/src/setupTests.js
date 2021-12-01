import Enzyme from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

//setup unit testing with enzyme 
Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})