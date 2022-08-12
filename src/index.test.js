const printTree = require('.');

test('file system displayed properly', () => {
    expect(printTree()).toBe(
        `axis
|__ video
|   |__ videoObjects
|   |   |__ powerSupplyTable
|   |   |   |__ powerSupplyEntry
|   |   |   |   |__ powerSupplyType
|   |   |   |   |__ powerSupplyId
|   |   |   |   |__ powerSupplyStatus
|   |   |__ fanTable
|   |   |   |__ fanEntry
|   |   |   |   |__ fanType
|   |   |   |   |__ fanId
|   |   |   |   |__ fanStatus
|   |   |__ tempSensorTable
|   |   |   |__ tempSensorEntry
|   |   |   |   |__ tempSensorType
|   |   |   |   |__ tempSensorId
|   |   |   |   |__ tempSensorStatus
|   |   |   |   |__ tempSensorValue
|   |   |__ videoChannelTable
|   |   |   |__ videoChannelEntry
|   |   |   |   |__ videoChannelId
|   |   |   |   |__ videoSignalStatus
|   |   |__ audioChannelTable
|   |   |   |__ audioChannelEntry
|   |   |   |   |__ audioChannelId
|   |   |   |   |__ audioSignalStatus
|   |   |__ casingTable
|   |   |   |__ casingEntry
|   |   |   |   |__ casingId
|   |   |   |   |__ casingName
|   |   |   |   |__ casingStatus
|   |   |__ storageTable
|   |   |   |__ storageEntry
|   |   |   |   |__ storageId
|   |   |   |   |__ storageName
|   |   |   |   |__ storageDisruptionDetected
|   |__ videoNotifications
|   |   |__ videoNotificationPrefix
|   |   |   |__ alarmNew
|   |   |   |__ alarmCleared
|   |   |   |__ alarmSingle
|   |   |__ alarmID
|   |   |__ alarmName
|   |   |__ alarmText
|   |__ videoConformance
|   |   |__ videoGroups
|   |   |   |__ videoObjectGroup
|   |   |   |__ videoNotificationGroup
|   |   |   |__ tempSensorGroup
|   |   |   |__ casingGroup
|   |   |   |__ storageGroup
|   |   |__ videoCompliances
|   |   |   |__ videoComplianceRev2
|   |   |   |__ videoCompliance`,
    );
});
