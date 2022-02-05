window.addEventListener('load', () => {
    let Main_view = new View('MainView', 'mainId');
    sidemenu = new Menu(Main_view, ["タイムライン", "チャット", "ワークスペース", "ノート", "マイページ"], "center");
})