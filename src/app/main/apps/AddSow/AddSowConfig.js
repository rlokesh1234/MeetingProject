import {FuseLoadable} from '@fuse';

export const AddSowConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/addSow',
            component: FuseLoadable({
                loader: () => import('./AddSow')
            })
        }
    ]
};
