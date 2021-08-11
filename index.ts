import { setupApp } from './src/app';

require('dotenv').config();

const port: number = +(process.env.API_PORT || 3000);

setupApp().then(app => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });
})
