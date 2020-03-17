import rules from '../rbac-rules';

const check = (rules, role, action, data) => {
    const permissions = rules[role];
    if (!permissions){
        return false;
    }

    const staticPermissions = permissions.static;

    // first checks static permissions
    if (staticPermissions && staticPermissions.includes(action)) {
        return true;
    }

    const dynamicPermissions = permissions.dynamic;
    // if no static permission, check dynamicPermissions
    if (dynamicPermissions) {
        const permissionCondition = dynamicPermissions[action]
        if (!permissionCondition) {
            return false;
        }

        return permissionCondition(data)
    }
    return false;
};

const Can = props => 
    check(rules, props.role, props.perform, props.data)
    ? props.yes()
    : props.no();

Can.defaultProps = {
    yes: () => null,
    no: () => null
}

export default Can;