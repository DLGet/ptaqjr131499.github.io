/**
 * Created by Administrator on 2016/9/25.
 */

$(function(){
    $('#dowebok').fullpage({
        //    ����ÿһ����Ļ����ɫ
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        //������ĳһ��֮�����
        afterLoad:function(link,index){
            //link  ��ê���ӵ����ƣ�
            //index ����ţ���1��ʼ����
            $('.section').removeClass('current');

            //current��Ӹ�˭��˭�Ϳ�ʼ������
            //�ö����ӳ�100s
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current')

            },100);

        }
    })




});