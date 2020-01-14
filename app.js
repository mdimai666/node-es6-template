import moment from 'moment'
import main from './index'


(async () => {
    console.log('START')
    await main();
    console.log('EXIT')
    process.exit();
})();