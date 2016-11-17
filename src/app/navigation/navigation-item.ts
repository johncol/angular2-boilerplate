export class NavigationItem {
    constructor(
        public label: string,
        public target: string,
        public disabled: boolean = false,
        public visible: boolean = true
    ) { }
}
