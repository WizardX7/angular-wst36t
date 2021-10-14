import { Component } from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenState = false;
  name = 'Candidate Status';
  public candidate = {
    candidate_detail_id: '13751',
    candidate_name: 'sazel william',
    contact_number: '1346287282',
    email_id: 'testTwo',
    current_location: null,
    gender: 'F',
    created_by: 'akshay.donode@capgemini.com',
    created_date: 'Mon Sep 06 2021 11:52 AM',
    total_exp: '2',
    level_based_on_exp: null,
    current_company: null,
    current_ctc: null,
    status: [
      {
        status_type: 'L1-L2 Scheduled',
        created_by: 'rohita.rani@capgemini.com',
        created_by_name: 'Rohita rani',
        created_date: 'Mon Sep 06 2021 11:52 AM',
        l2_panel: 'Akshay Donode',
        l2_date: 'Mon Sep 06 2021 02:52 PM',
        recruiter_name: 'Rohita rani',
        is_revisit: true,
      },
      {
        status_type: 'L1-L2 Select',
        created_by: 'akshay.donode@capgemini.com',
        created_by_name: 'Akshay Donode',
        created_date: 'Mon Sep 06 2021 11:54 AM',
        l2_panel: 'Akshay Donode',
        l2_date: 'Mon Sep 06 2021 02:52 PM',
        recruiter_name: 'Rohita rani',
        is_revisit: true,
      },
      {
        status_type: 'L2 Select',
        created_by: 'akshay.donode@capgemini.com',
        created_by_name: 'Akshay Donode',
        created_date: 'Mon Sep 06 2021 02:52 PM',
        l2_panel: 'Akshay Donode',
        l2_date: 'Mon Sep 06 2021 02:52 PM',
        recruiter_name: 'Rohita rani',
        is_revisit: true,
      },
      {
        status_type: 'L1-L2 Select',
        created_by: 'akshay.donode@capgemini.com',
        created_by_name: 'Akshay Donode',
        created_date: 'Tue Sep 07 2021 09:19 PM',
        l2_panel: 'Akshay Donode',
        l2_date: 'Mon Sep 06 2021 02:52 PM',
        recruiter_name: 'Rohita rani',
      },
      {
        status_type: 'Offer_Negotiation',
        created_by: 'akshay.donode@capgemini.com',
        created_by_name: 'Akshay Donode',
        created_date: 'Tue Sep 14 2021 01:52 PM',
        expected_ctc: '15,00,000',
        offer_ctc: '12,00,000',
      },
      {
        status_type: 'Joined',
        created_by: 'akshay.donode@capgemini.com',
        created_date: 'Thu Sep 16 2021 11:47 AM',
        created_by_name: 'Akshay Donode',
      },
      {
        status_type: 'Joined',
        created_by: 'akshay.donode@capgemini.com',
        created_date: 'Thu Sep 16 2021 11:47 AM',
        created_by_name: 'Akshay Donode',
      },
      {
        status_type: 'Joined',
        created_by: 'akshay.donode@capgemini.com',
        created_date: 'Thu Sep 16 2021 11:47 AM',
        created_by_name: 'Akshay Donode',
      },
      {
        status_type: 'Joined',
        created_by: 'akshay.donode@capgemini.com',
        created_date: 'Thu Sep 16 2021 11:47 AM',
        created_by_name: 'Akshay Donode',
      },
      {
        status_type: 'Joined',
        created_by: 'akshay.donode@capgemini.com',
        created_date: 'Thu Sep 16 2021 11:47 AM',
        created_by_name: 'Akshay Donode',
      },
    ],
  };
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
