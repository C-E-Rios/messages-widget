export default function ($sce) {
    'ngInject';
    return function (text) {

        const expressions = {
            brackets: /\[(.*?)\]/,
            url: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
            newLine: /\\n/g
        };

        const issueDescription = text ? text.match(expressions.brackets) : '';
        const issueUrl = text ? text.match(expressions.url) : '';

        text = text ? text.replace(expressions.newLine, '. ') : '';
        text = text ? text.replace(expressions.brackets, `<span class="issue-description"> ${issueDescription[0]} </span>`) : '';
        text = text ? text.replace(expressions.url, `<a href="${issueUrl}"> ${issueUrl} </a>`) : '';

        return $sce.trustAsHtml(text);

    };
}
