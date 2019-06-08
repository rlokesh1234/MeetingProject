import {FuseLoadable} from '@fuse';

export const ProjectAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/psppdfkit',
            component: FuseLoadable({
                loader: () => import('./ProjectPspdfKitApp')
            })
        }
    ]
};
