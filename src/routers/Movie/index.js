export default{
    path:'/movie',
    component:()=>import('@/views/Movie'),
    children:[
        {
            path:'city',
            component:()=>import('@/components/City')
        },
        {
            path:'Nowplaying',
            component:()=>import('@/components/NowPlaying')
        },
        {
            path:'comingsoon',
            component:()=>import('@/components/ComingSoon')
        },
        {
            path:'search',
            component:()=>import('@/components/Search')
        },
        {
            path:'/Movie',
            redirect:'/Movie/NowPlaying'
        }
       
    ]
}