import { setupApp } from './src/app';

// TODO: set port on .env
const port = 3000;

setupApp().then(app => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });
})
